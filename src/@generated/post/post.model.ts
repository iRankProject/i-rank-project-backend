import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Category } from '../category/category.model';
import { Votes } from '../votes/votes.model';
import { PostCount } from './post-count.output';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Boolean, {nullable:true})
    winner!: boolean | null;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => [Votes], {nullable:true})
    votes?: Array<Votes>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
