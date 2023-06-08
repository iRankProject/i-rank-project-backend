import { ConflictException, Injectable } from '@nestjs/common';
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

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
