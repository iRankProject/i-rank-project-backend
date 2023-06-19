import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateWithoutUserInput } from './votes-create-without-user.input';
import { Type } from 'class-transformer';
import { VotesCreateOrConnectWithoutUserInput } from './votes-create-or-connect-without-user.input';
import { VotesCreateManyUserInputEnvelope } from './votes-create-many-user-input-envelope.input';
import { VotesWhereUniqueInput } from './votes-where-unique.input';

@InputType()
export class VotesCreateNestedManyWithoutUserInput {

    @Field(() => [VotesCreateWithoutUserInput], {nullable:true})
    @Type(() => VotesCreateWithoutUserInput)
    create?: Array<VotesCreateWithoutUserInput>;

    @Field(() => [VotesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => VotesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<VotesCreateOrConnectWithoutUserInput>;

    @Field(() => VotesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => VotesCreateManyUserInputEnvelope)
    createMany?: VotesCreateManyUserInputEnvelope;

    @Field(() => [VotesWhereUniqueInput], {nullable:true})
    @Type(() => VotesWhereUniqueInput)
    connect?: Array<VotesWhereUniqueInput>;
}
