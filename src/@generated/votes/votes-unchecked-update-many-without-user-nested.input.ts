import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateWithoutUserInput } from './votes-create-without-user.input';
import { Type } from 'class-transformer';
import { VotesCreateOrConnectWithoutUserInput } from './votes-create-or-connect-without-user.input';
import { VotesUpsertWithWhereUniqueWithoutUserInput } from './votes-upsert-with-where-unique-without-user.input';
import { VotesCreateManyUserInputEnvelope } from './votes-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { VotesUpdateWithWhereUniqueWithoutUserInput } from './votes-update-with-where-unique-without-user.input';
import { VotesUpdateManyWithWhereWithoutUserInput } from './votes-update-many-with-where-without-user.input';
import { VotesScalarWhereInput } from './votes-scalar-where.input';

@InputType()
export class VotesUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [VotesCreateWithoutUserInput], {nullable:true})
    @Type(() => VotesCreateWithoutUserInput)
    create?: Array<VotesCreateWithoutUserInput>;

    @Field(() => [VotesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VotesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VotesCreateOrConnectWithoutUserInput>;

    @Field(() => [VotesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VotesUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<VotesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => VotesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VotesCreateManyUserInputEnvelope)
    createMany?: VotesCreateManyUserInputEnvelope;

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

    @Field(() => [VotesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => VotesUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<VotesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [VotesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => VotesUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<VotesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [VotesScalarWhereInput], {nullable:true})
    @Type(() => VotesScalarWhereInput)
    deleteMany?: Array<VotesScalarWhereInput>;
}
