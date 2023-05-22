import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VotesService } from './votes.service';

@Resolver('Vote')
export class VotesResolver {
  constructor(private readonly votesService: VotesService) {}

  @Mutation('createVote')
  create() {
    return this.votesService.create();
  }

  @Query('votes')
  findAll() {
    return this.votesService.findAll();
  }

  @Query('vote')
  findOne(@Args('id') id: number) {
    return this.votesService.findOne();
  }

  @Mutation('updateVote')
  update() {
    return this.votesService.update();
  }

  @Mutation('removeVote')
  remove(@Args('id') id: number) {
    return this.votesService.remove();
  }
}
