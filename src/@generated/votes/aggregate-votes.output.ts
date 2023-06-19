import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VotesCountAggregate } from './votes-count-aggregate.output';
import { VotesMinAggregate } from './votes-min-aggregate.output';
import { VotesMaxAggregate } from './votes-max-aggregate.output';

@ObjectType()
export class AggregateVotes {

    @Field(() => VotesCountAggregate, {nullable:true})
    _count?: VotesCountAggregate;

    @Field(() => VotesMinAggregate, {nullable:true})
    _min?: VotesMinAggregate;

    @Field(() => VotesMaxAggregate, {nullable:true})
    _max?: VotesMaxAggregate;
}
