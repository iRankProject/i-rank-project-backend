import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutVotesInput } from '../post/post-create-nested-one-without-votes.input';

@InputType()
export class VotesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    total_votes!: number;

    @Field(() => PostCreateNestedOneWithoutVotesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutVotesInput;
}
