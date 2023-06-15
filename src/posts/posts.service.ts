import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateOnePostArgs } from 'src/@generated/post/update-one-post.args';

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
