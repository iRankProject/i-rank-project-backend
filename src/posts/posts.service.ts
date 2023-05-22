import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  create() {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne() {
    return `This action returns a  post`;
  }

  update() {
    return `This action updates a  post`;
  }

  remove() {
    return `This action removes a  post`;
  }
}
