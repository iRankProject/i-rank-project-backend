import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VotesSumAggregate {

    @Field(() => Int, {nullable:true})
    total_votes?: number;
}
