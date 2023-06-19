import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';

@ObjectType()
export class Votes {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    postId!: string;

    @Field(() => Post, {nullable:false})
    post?: Post;

    @Field(() => User, {nullable:false})
    user?: User;
}
