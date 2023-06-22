import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VotesService } from './votes.service';
import { CreateOneVotesArgs } from 'src/@generated/votes/create-one-votes.args';
import { Votes } from 'src/@generated/votes/votes.model';
import { FindManyVotesArgs } from 'src/@generated/votes/find-many-votes.args';

@Resolver(() => Votes)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) {}

  // @Mutation(() => Votes)
  // createVote(@Args() createVoteInput: CreateOneVotesArgs) {
  //   return this.votesService.create(createVoteInput);
  // }
  @Query(() => [Votes], { name: 'votes' })
  findAllByUserId(@Args() findAllByUserId: FindManyVotesArgs) {
    return this.votesService.findAllByUserId(findAllByUserId);
  }
  // @Query(() => Vote, { name: 'vote' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.votesService.findOne(id);
  // }

  // @Mutation(() => Vote)
  // updateVote(@Args('updateVoteInput') updateVoteInput: ) {
  //   return this.votesService.update(updateVoteInput.id, updateVoteInput);
  // }
  // @Mutation(() => Vote)
  // removeVote(@Args('id', { type: () => Int }) id: number) {
  //   return this.votesService.remove(id);
  // }
}
