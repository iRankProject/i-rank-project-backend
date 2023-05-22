import { Injectable } from '@nestjs/common';

@Injectable()
export class VotesService {
  create() {
    return 'This action adds a new vote';
  }

  findAll() {
    return `This action returns all votes`;
  }

  findOne() {
    return `This action returns a # vote`;
  }

  update() {
    return `This action updates a # vote`;
  }

  remove() {
    return `This action removes a # vote`;
  }
}
