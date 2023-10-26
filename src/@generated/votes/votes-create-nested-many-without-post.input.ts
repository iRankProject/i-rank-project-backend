import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateWithoutPostInput } from './votes-create-without-post.input';
import { Type } from 'class-transformer';
import { VotesCreateOrConnectWithoutPostInput } from './votes-create-or-connect-without-post.input';
import { VotesCreateManyPostInputEnvelope } from './votes-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';

@InputType()
export class VotesCreateNestedManyWithoutPostInput {

    @Field(() => [VotesCreateWithoutPostInput], {nullable:true})
    @Type(() => VotesCreateWithoutPostInput)
    create?: Array<VotesCreateWithoutPostInput>;

    @Field(() => [VotesCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => VotesCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<VotesCreateOrConnectWithoutPostInput>;

    @Field(() => VotesCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => VotesCreateManyPostInputEnvelope)
    createMany?: VotesCreateManyPostInputEnvelope;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>>;
}
