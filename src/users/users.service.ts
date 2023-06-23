import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
import { UpdateOneUserArgs } from 'src/@generated/user/update-one-user.args';
import { encodePassword } from '../utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserInput: CreateOneUserArgs) {
    const { username, email, password } = createUserInput.data;

    const hashedPassword = encodePassword(password);
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username: { equals: username } }, { email: { equals: email } }],
      },
    });

    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }

    try {
      return await this.prisma.user.create({
        data: {
          ...createUserInput.data,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new Error('Unable to create user');
    }
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    return user;
  }

  async update(id: string, updateUserInput: UpdateOneUserArgs) {
    const { password } = updateUserInput.data;

    if (password) {
      const hashedPassword = encodePassword(password.set);

      updateUserInput.data.password = { set: hashedPassword };
    }

    try {
      const updatedUser = await this.prisma.user.update({
        ...updateUserInput,
        where: { id },
      });
      return updatedUser;
    } catch (error) {
      throw new Error('Unable to update user');
    }
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    try {
      await this.prisma.user.delete({ where: { id } });
      return user;
    } catch (error) {
      throw new Error('Unable to remove user');
    }
  }
}
