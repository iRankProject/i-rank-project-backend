import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class Votes {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    total_votes!: number;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => Post, {nullable:false})
    post?: Post;
}
