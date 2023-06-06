import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereInput } from './votes-where.input';
import { Type } from 'class-transformer';
import { VotesOrderByWithRelationInput } from './votes-order-by-with-relation.input';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VotesCountAggregateInput } from './votes-count-aggregate.input';
import { VotesAvgAggregateInput } from './votes-avg-aggregate.input';
import { VotesSumAggregateInput } from './votes-sum-aggregate.input';
import { VotesMinAggregateInput } from './votes-min-aggregate.input';
import { VotesMaxAggregateInput } from './votes-max-aggregate.input';

@ArgsType()
export class VotesAggregateArgs {

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;

    @Field(() => [VotesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VotesOrderByWithRelationInput>;

    @Field(() => VotesWhereUniqueInput, {nullable:true})
    cursor?: VotesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VotesCountAggregateInput, {nullable:true})
    _count?: VotesCountAggregateInput;

    @Field(() => VotesAvgAggregateInput, {nullable:true})
    _avg?: VotesAvgAggregateInput;

    @Field(() => VotesSumAggregateInput, {nullable:true})
    _sum?: VotesSumAggregateInput;

    @Field(() => VotesMinAggregateInput, {nullable:true})
    _min?: VotesMinAggregateInput;

    @Field(() => VotesMaxAggregateInput, {nullable:true})
    _max?: VotesMaxAggregateInput;
}
