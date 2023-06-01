import { ConflictException, Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(
    name: string,
    description: string,
    startDate?: Date,
    endDate?: Date,
  ): Promise<Category | null> {
    const existingCategory = await this.prisma.category.findUnique({
      where: { name },
    });

    if (existingCategory) {
      throw new ConflictException('Category with the same name already exists');
    }

    const currentDate = new Date();
    const data = {
      name,
      description,
      startDate: startDate || currentDate,
      endDate: endDate || currentDate,
    };

    const createdCategory = await this.prisma.category.create({
      data,
    });

    return createdCategory;
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update() {
    return `This action updates a # category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
