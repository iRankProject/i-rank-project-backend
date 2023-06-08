import { Injectable } from '@nestjs/common';
import { CreateOneUserArgs } from 'src/@generated/user/create-one-user.args';

@Injectable()
export class UsersService {
  create(createUserInput: CreateOneUserArgs) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
