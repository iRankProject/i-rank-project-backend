import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation('createPost')
  create() {
    return this.postsService.create();
  }

  @Query('posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postsService.findOne();
  }

  @Mutation('updatePost')
  update() {
    return this.postsService.update();
  }

  @Mutation('removePost')
  remove(@Args('id') id: number) {
    return this.postsService.remove();
  }
}
