import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VotesCreateNestedManyWithoutPostInput } from '../votes/votes-create-nested-many-without-post.input';

@InputType()
export class PostCreateWithoutCategoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Boolean, {nullable:true})
    winner?: boolean;

    @Field(() => VotesCreateNestedManyWithoutPostInput, {nullable:true})
    votes?: VotesCreateNestedManyWithoutPostInput;
}
