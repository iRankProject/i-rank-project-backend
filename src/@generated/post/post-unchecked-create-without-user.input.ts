import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VotesUncheckedCreateNestedManyWithoutPostInput } from '../votes/votes-unchecked-create-nested-many-without-post.input';

@InputType()
export class PostUncheckedCreateWithoutUserInput {

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

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => VotesUncheckedCreateNestedManyWithoutPostInput, {nullable:true})
    votes?: VotesUncheckedCreateNestedManyWithoutPostInput;
}
