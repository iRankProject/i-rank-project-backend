import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneCategoryArgs } from 'src/@generated/category/create-one-category.args';
import { UpdateOneCategoryArgs } from 'src/@generated/category/update-one-category.args';

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
    return this.prisma.category.findMany();
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }

    return category;
  }

  async update(id: string, updateCategoryInput: UpdateOneCategoryArgs) {
    try {
      const updatedCategory = await this.prisma.category.update({
        ...updateCategoryInput,
        where: { id },
      });
      return updatedCategory;
    } catch (error) {
      throw new Error('Unable to update category');
    }
  }

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
