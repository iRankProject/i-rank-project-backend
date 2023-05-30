import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
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

  async update(
    id: string,
    username?: string,
    email?: string,
  ): Promise<User | null> {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    const data: Prisma.UserUpdateInput = {};

    if (username !== undefined) {
      data.username = username;
    }

    if (email !== undefined) {
      data.email = email;
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data,
    });

    return updatedUser;
  }
  async removeUser(id: string): Promise<User | null> {
    const removedUser = await this.prismaService.user.delete({
      where: { id },
    });

    return removedUser;
  }
}
