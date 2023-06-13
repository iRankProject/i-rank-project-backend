import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreateOnePostArgs) {
    const { data } = createPostInput;

    const { user, category, ...postData } = data;

    const existingUser = await this.prisma.user.findUnique({
      where: { id: user.connect.id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with id ${user.connect.id} not found`);
    }

    const existingCategory = await this.prisma.category.findUnique({
      where: { id: category.connect.id },
    });

    if (!existingCategory) {
      throw new NotFoundException(
        `Category with id ${category.connect.id} not found`,
      );
    }

    try {
      const createdPost = await this.prisma.post.create({
        data: {
          ...postData,
          user: { connect: { id: user.connect.id } },
          category: { connect: { id: category.connect.id } },
        },
      });

      return createdPost;
    } catch (error) {
      throw new Error('Unable to create post');
    }
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
