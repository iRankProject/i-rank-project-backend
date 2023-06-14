import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreateOnePostArgs } from 'src/@generated/post/create-one-post.args';
import { Post } from 'src/@generated/post/post.model';
import { UpdateOnePostArgs } from 'src/@generated/post/update-one-post.args';
@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  createPost(@Args() createPostInput: CreateOnePostArgs) {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args() updatePostInput: UpdateOnePostArgs) {
    const id = updatePostInput.where.id;
    return this.postsService.update(id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => String }) id: string) {
    return this.postsService.remove(id);
  }
}
