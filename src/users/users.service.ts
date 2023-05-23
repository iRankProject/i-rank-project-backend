import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';
import { encodePassword } from '../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(
    username: string,
    email: string,
    password: string,
  ): Promise<User> {
    const existingUser = await this.prismaService.user.findUnique({
      where: { username },
    });
    const existingEmail = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (existingUser || existingEmail) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = encodePassword(password);

    const newUser = await this.prismaService.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update() {
    return `This action updates a # user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
