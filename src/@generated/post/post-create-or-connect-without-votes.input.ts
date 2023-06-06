import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutVotesInput } from './post-create-without-votes.input';

@InputType()
export class PostCreateOrConnectWithoutVotesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutVotesInput, {nullable:false})
    @Type(() => PostCreateWithoutVotesInput)
    create!: PostCreateWithoutVotesInput;
}
