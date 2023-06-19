import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { VotesCountAggregate } from './votes-count-aggregate.output';
import { VotesMinAggregate } from './votes-min-aggregate.output';
import { VotesMaxAggregate } from './votes-max-aggregate.output';

@ObjectType()
export class VotesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => VotesCountAggregate, {nullable:true})
    _count?: VotesCountAggregate;

    @Field(() => VotesMinAggregate, {nullable:true})
    _min?: VotesMinAggregate;

    @Field(() => VotesMaxAggregate, {nullable:true})
    _max?: VotesMaxAggregate;
}
