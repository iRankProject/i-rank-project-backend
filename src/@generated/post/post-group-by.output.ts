import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostCountAggregate } from './post-count-aggregate.output';
import { PostAvgAggregate } from './post-avg-aggregate.output';
import { PostSumAggregate } from './post-sum-aggregate.output';
import { PostMinAggregate } from './post-min-aggregate.output';
import { PostMaxAggregate } from './post-max-aggregate.output';

@ObjectType()
export class PostGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    score!: number;

    @Field(() => Boolean, {nullable:true})
    winner?: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    categoryId!: string;

    @Field(() => PostCountAggregate, {nullable:true})
    _count?: PostCountAggregate;

    @Field(() => PostAvgAggregate, {nullable:true})
    _avg?: PostAvgAggregate;

    @Field(() => PostSumAggregate, {nullable:true})
    _sum?: PostSumAggregate;

    @Field(() => PostMinAggregate, {nullable:true})
    _min?: PostMinAggregate;

    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: PostMaxAggregate;
}
