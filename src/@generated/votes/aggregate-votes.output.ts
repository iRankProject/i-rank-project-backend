import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VotesCountAggregate } from './votes-count-aggregate.output';
import { VotesAvgAggregate } from './votes-avg-aggregate.output';
import { VotesSumAggregate } from './votes-sum-aggregate.output';
import { VotesMinAggregate } from './votes-min-aggregate.output';
import { VotesMaxAggregate } from './votes-max-aggregate.output';

@ObjectType()
export class AggregateVotes {

    @Field(() => VotesCountAggregate, {nullable:true})
    _count?: VotesCountAggregate;

    @Field(() => VotesAvgAggregate, {nullable:true})
    _avg?: VotesAvgAggregate;

    @Field(() => VotesSumAggregate, {nullable:true})
    _sum?: VotesSumAggregate;

    @Field(() => VotesMinAggregate, {nullable:true})
    _min?: VotesMinAggregate;

    @Field(() => VotesMaxAggregate, {nullable:true})
    _max?: VotesMaxAggregate;
}
