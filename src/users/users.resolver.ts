import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async createUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.create(username, email, password);
  }

  @Query('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('updateUser')
  updateUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('id') id: string,
  ) {
    return this.usersService.update(id, username, email);
  }

  @Mutation('removeUser')
  removeUser(@Args('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
