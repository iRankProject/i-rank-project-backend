import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutVotesInput } from './post-create-without-votes.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutVotesInput } from './post-create-or-connect-without-votes.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostCreateNestedOneWithoutVotesInput {

    @Field(() => PostCreateWithoutVotesInput, {nullable:true})
    @Type(() => PostCreateWithoutVotesInput)
    create?: PostCreateWithoutVotesInput;

    @Field(() => PostCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutVotesInput)
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Prisma.AtLeast<PostWhereUniqueInput, 'id'>;
}
