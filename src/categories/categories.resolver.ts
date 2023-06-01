import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation('createCategory')
  async createCategory(
    @Args('name') name: string,
    @Args('description') description: string,
    @Args('startDate', { nullable: true }) startDate?: Date,
    @Args('endDate', { nullable: true }) endDate?: Date,
  ) {
    return this.categoriesService.create(name, description, startDate, endDate);
  }

  @Query('categories')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query('category')
  findOne(@Args('id') id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation('updateCategory')
  update() {
    return this.categoriesService.update();
  }

  @Mutation('removeCategory')
  remove(@Args('id') id: number) {
    return this.categoriesService.remove(id);
  }
}
