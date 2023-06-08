import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneCategoryArgs } from 'src/@generated/category/create-one-category.args';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoryInput: CreateOneCategoryArgs) {
    const { name } = createCategoryInput.data;

    const existingCategory = await this.prisma.category.findFirst({
      where: {
        name: { equals: name },
      },
    });

    if (existingCategory) {
      throw new ConflictException('Category already exists');
    }

    try {
      return await this.prisma.category.create(createCategoryInput);
    } catch (error) {
      throw new Error('Unable to create category');
    }
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  // update(id: number, updateCategoryInput: UpdateCategoryInput) {
  //   return `This action updates a #${id} category`;
  // }

  async remove(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new NotFoundException('User not found');
    }

    try {
      await this.prisma.category.delete({ where: { id } });
      return category;
    } catch (error) {
      throw new Error('Unable to remove category');
    }
  }
}
