import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VotesCountOrderByAggregateInput } from './votes-count-order-by-aggregate.input';
import { VotesMaxOrderByAggregateInput } from './votes-max-order-by-aggregate.input';
import { VotesMinOrderByAggregateInput } from './votes-min-order-by-aggregate.input';

@InputType()
export class VotesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => VotesCountOrderByAggregateInput, {nullable:true})
    _count?: VotesCountOrderByAggregateInput;

    @Field(() => VotesMaxOrderByAggregateInput, {nullable:true})
    _max?: VotesMaxOrderByAggregateInput;

    @Field(() => VotesMinOrderByAggregateInput, {nullable:true})
    _min?: VotesMinOrderByAggregateInput;
}
