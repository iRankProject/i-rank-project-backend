import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from 'src/@generated/category/category.model';
import { CreateOneCategoryArgs } from 'src/@generated/category/create-one-category.args';
import { UpdateOneCategoryArgs } from 'src/@generated/category/update-one-category.args';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(@Args() createCategoryInput: CreateOneCategoryArgs) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(@Args() updateCategoryInput: UpdateOneCategoryArgs) {
    const id = updateCategoryInput.where.id;
    return this.categoriesService.update(id, updateCategoryInput);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoriesService.remove(id);
  }
}
