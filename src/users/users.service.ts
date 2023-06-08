import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
