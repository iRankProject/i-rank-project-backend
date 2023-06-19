import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';

@InputType()
export class PostCreateWithoutVotesInput {

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

    @Field(() => CategoryCreateNestedOneWithoutPostsInput, {nullable:false})
    category!: CategoryCreateNestedOneWithoutPostsInput;
}
