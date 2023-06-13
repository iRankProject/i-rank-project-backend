import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOneVotesArgs } from 'src/@generated/votes/create-one-votes.args';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createVotesArgs: CreateOneVotesArgs) {
    // const { data } = createVotesArgs;
    // try {
    //   return await this.prisma.votes.create({
    //     data: {
    //       total_votes: data.total_votes,
    //       post: {
    //         connect: {
    //           id: data.post.id,
    //         },
    //       },
    //     },
    //   });
    // } catch (error) {
    //   throw new Error('Unable to create vote');
    // }
  }

  findAll() {
    return `This action returns all votes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vote`;
  }

  update(id: number) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
