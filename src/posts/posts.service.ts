import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateOnePostArgs } from 'src/@generated/post/update-one-post.args';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreateOnePostArgs) {
    const { data } = createPostInput;
    const postData = {
      ...data,
      category: {
        connect: { id: data.category.connect.id },
      },
    };

    return this.prisma.post.create({
      data: {
        ...postData,
        votes: {
          create: data.votes?.create,
        },
      },
    });
  }

  async findAll() {
    try {
      const posts = await this.prisma.post.findMany();
      return posts;
    } catch (error) {
      throw new Error('Unable to fetch posts');
    }
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    return post;
  }

  async update(id: string, updatePostInput: UpdateOnePostArgs) {
    const { data } = updatePostInput;

    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    try {
      const updatedPost = await this.prisma.post.update({
        where: { id },
        data,
      });

      return updatedPost;
    } catch (error) {
      throw new Error('Unable to update post');
    }
  }

  async remove(id: string) {
    const existingPost = await this.prisma.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    try {
      const removedPost = await this.prisma.post.delete({
        where: { id },
      });

      return removedPost;
    } catch (error) {
      throw new Error('Unable to remove post');
    }
  }
}
