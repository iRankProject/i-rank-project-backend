import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PostOrderByWithRelationInput } from '../post/post-order-by-with-relation.input';

@InputType()
export class VotesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total_votes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postId?: keyof typeof SortOrder;

    @Field(() => PostOrderByWithRelationInput, {nullable:true})
    post?: PostOrderByWithRelationInput;
}
