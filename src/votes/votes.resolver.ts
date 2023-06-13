import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VotesService } from './votes.service';
import { CreateOneVotesArgs } from 'src/@generated/votes/create-one-votes.args';
import { Vote } from 'src/graphql';

@Resolver(() => Vote)
export class VotesResolver {
  constructor(private readonly votesService: VotesService) {}

  // @Mutation(() => Vote)
  // createVote(@Args() createVoteInput: CreateOneVotesArgs) {
  //   return this.votesService.create(createVoteInput);
  // }
  // @Query(() => [Vote], { name: 'votes' })
  // findAll() {
  //   return this.votesService.findAll();
  // }
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
