import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VotesOrderByRelationAggregateInput } from '../votes/votes-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => VotesOrderByRelationAggregateInput, {nullable:true})
    votes?: VotesOrderByRelationAggregateInput;
}
