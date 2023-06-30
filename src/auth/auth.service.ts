import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { SignUpInput } from './dto/signup-input';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { encodePassword } from 'src/utils/bcrypt';
import { SignInInput } from './dto/signin.input';
import { ForbiddenError } from '@nestjs/apollo';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async signup(signUpInput: SignUpInput) {
    const { username, email, password } = signUpInput;

    const hashedPassword = encodePassword(password);
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: { equals: username } }, { email: { equals: email } }],
      },
    });

    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }
    const user = await this.prisma.user.create({
      data: {
        ...signUpInput,
        password: hashedPassword,
      },
    });
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);
    try {
      return {
        accessToken,
        refreshToken,
        user,
      };
    } catch (error) {
      throw new Error('Unable to create user');
    }
  }

  async createTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      {
        userId,
        email,
      },
      {
        expiresIn: '1h',
        secret: this.configService.get('ACCESS_TOKEN_SECRET'),
      },
    );
    const refreshToken = this.jwtService.sign(
      {
        userId,
        email,
        accessToken,
      },
      {
        expiresIn: '7d',
        secret: this.configService.get('REFRESH_TOKEN_SECRET'),
      },
    );
    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await encodePassword(refreshToken);
    await this.prisma.user.update({
      where: { id: userId },
      data: { hashedRefreshToken },
    });
  }

  async signin(signInInput: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email: signInInput.email },
    });

    if (!user) {
      throw new ForbiddenError('Access Denied');
    }

    const doPasswordsMatch = await bcrypt.compare(
      signInInput.password,
      user.password,
    );

    if (!doPasswordsMatch) {
      throw new ForbiddenError('Access Denied');
    }

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async logout(userId: string) {
    await this.prisma.user.updateMany({
      where: { id: userId, hashedRefreshToken: { not: null } },
      data: { hashedRefreshToken: null },
    });
    return { loggedOut: true };
  }

  async getNewTokens(userId: string, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ForbiddenException('Access Denied');
    }

    const doRefreshTokensMatch = await bcrypt.compare(
      rt,
      user.hashedRefreshToken,
    );

    if (!doRefreshTokensMatch) {
      throw new ForbiddenException('Access Denied');
    }
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }
}
