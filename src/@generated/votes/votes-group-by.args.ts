import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereInput } from './votes-where.input';
import { Type } from 'class-transformer';
import { VotesOrderByWithAggregationInput } from './votes-order-by-with-aggregation.input';
import { VotesScalarFieldEnum } from './votes-scalar-field.enum';
import { VotesScalarWhereWithAggregatesInput } from './votes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { VotesCountAggregateInput } from './votes-count-aggregate.input';
import { VotesMinAggregateInput } from './votes-min-aggregate.input';
import { VotesMaxAggregateInput } from './votes-max-aggregate.input';

@ArgsType()
export class VotesGroupByArgs {

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;

    @Field(() => [VotesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<VotesOrderByWithAggregationInput>;

    @Field(() => [VotesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof VotesScalarFieldEnum>;

    @Field(() => VotesScalarWhereWithAggregatesInput, {nullable:true})
    having?: VotesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VotesCountAggregateInput, {nullable:true})
    _count?: VotesCountAggregateInput;

    @Field(() => VotesMinAggregateInput, {nullable:true})
    _min?: VotesMinAggregateInput;

    @Field(() => VotesMaxAggregateInput, {nullable:true})
    _max?: VotesMaxAggregateInput;
}
