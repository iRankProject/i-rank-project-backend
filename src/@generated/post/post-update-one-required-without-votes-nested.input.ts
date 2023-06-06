import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutVotesInput } from './post-create-without-votes.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutVotesInput } from './post-create-or-connect-without-votes.input';
import { PostUpsertWithoutVotesInput } from './post-upsert-without-votes.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithoutVotesInput } from './post-update-without-votes.input';

@InputType()
export class PostUpdateOneRequiredWithoutVotesNestedInput {

    @Field(() => PostCreateWithoutVotesInput, {nullable:true})
    @Type(() => PostCreateWithoutVotesInput)
    create?: PostCreateWithoutVotesInput;

    @Field(() => PostCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => PostCreateOrConnectWithoutVotesInput)
    connectOrCreate?: PostCreateOrConnectWithoutVotesInput;

    @Field(() => PostUpsertWithoutVotesInput, {nullable:true})
    @Type(() => PostUpsertWithoutVotesInput)
    upsert?: PostUpsertWithoutVotesInput;

    @Field(() => PostWhereUniqueInput, {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutVotesInput, {nullable:true})
    @Type(() => PostUpdateWithoutVotesInput)
    update?: PostUpdateWithoutVotesInput;
}
