import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutVotesInput } from './post-update-without-votes.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutVotesInput } from './post-create-without-votes.input';

@InputType()
export class PostUpsertWithoutVotesInput {

    @Field(() => PostUpdateWithoutVotesInput, {nullable:false})
    @Type(() => PostUpdateWithoutVotesInput)
    update!: PostUpdateWithoutVotesInput;

    @Field(() => PostCreateWithoutVotesInput, {nullable:false})
    @Type(() => PostCreateWithoutVotesInput)
    create!: PostCreateWithoutVotesInput;
}
