import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';

@Resolver('Category')
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation('createCategory')
  create() {
    return this.categoriesService.create();
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
