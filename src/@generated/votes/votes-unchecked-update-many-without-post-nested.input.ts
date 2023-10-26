import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateWithoutPostInput } from './votes-create-without-post.input';
import { Type } from 'class-transformer';
import { VotesCreateOrConnectWithoutPostInput } from './votes-create-or-connect-without-post.input';
import { VotesUpsertWithWhereUniqueWithoutPostInput } from './votes-upsert-with-where-unique-without-post.input';
import { VotesCreateManyPostInputEnvelope } from './votes-create-many-post-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { VotesUpdateWithWhereUniqueWithoutPostInput } from './votes-update-with-where-unique-without-post.input';
import { VotesUpdateManyWithWhereWithoutPostInput } from './votes-update-many-with-where-without-post.input';
import { VotesScalarWhereInput } from './votes-scalar-where.input';

@InputType()
export class VotesUncheckedUpdateManyWithoutPostNestedInput {

    @Field(() => [VotesCreateWithoutPostInput], {nullable:true})
    @Type(() => VotesCreateWithoutPostInput)
    create?: Array<VotesCreateWithoutPostInput>;

    @Field(() => [VotesCreateOrConnectWithoutPostInput], {nullable:true})
    @Type(() => VotesCreateOrConnectWithoutPostInput)
    connectOrCreate?: Array<VotesCreateOrConnectWithoutPostInput>;

    @Field(() => [VotesUpsertWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => VotesUpsertWithWhereUniqueWithoutPostInput)
    upsert?: Array<VotesUpsertWithWhereUniqueWithoutPostInput>;

    @Field(() => VotesCreateManyPostInputEnvelope, {nullable:true})
    @Type(() => VotesCreateManyPostInputEnvelope)
    createMany?: VotesCreateManyPostInputEnvelope;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>>;

    @Field(() => [VotesUpdateWithWhereUniqueWithoutPostInput], {nullable:true})
    @Type(() => VotesUpdateWithWhereUniqueWithoutPostInput)
    update?: Array<VotesUpdateWithWhereUniqueWithoutPostInput>;

    @Field(() => [VotesUpdateManyWithWhereWithoutPostInput], {nullable:true})
    @Type(() => VotesUpdateManyWithWhereWithoutPostInput)
    updateMany?: Array<VotesUpdateManyWithWhereWithoutPostInput>;

    @Field(() => [VotesScalarWhereInput], {nullable:true})
    @Type(() => VotesScalarWhereInput)
    deleteMany?: Array<VotesScalarWhereInput>;
}
