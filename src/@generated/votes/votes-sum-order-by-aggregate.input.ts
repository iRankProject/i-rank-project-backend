import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class VotesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    total_votes?: keyof typeof SortOrder;
}
