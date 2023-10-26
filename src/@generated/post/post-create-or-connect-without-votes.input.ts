import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutVotesInput } from './post-create-without-votes.input';

@InputType()
export class PostCreateOrConnectWithoutVotesInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;

    @Field(() => PostCreateWithoutVotesInput, {nullable:false})
    @Type(() => PostCreateWithoutVotesInput)
    create!: PostCreateWithoutVotesInput;
}
