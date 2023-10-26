import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVotesInput } from './user-create-without-votes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVotesInput } from './user-create-or-connect-without-votes.input';
import { UserUpsertWithoutVotesInput } from './user-upsert-without-votes.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutVotesInput } from './user-update-without-votes.input';

@InputType()
export class UserUpdateOneRequiredWithoutVotesNestedInput {

    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: UserCreateWithoutVotesInput;

    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput;

    @Field(() => UserUpsertWithoutVotesInput, {nullable:true})
    @Type(() => UserUpsertWithoutVotesInput)
    upsert?: UserUpsertWithoutVotesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateWithoutVotesInput, {nullable:true})
    @Type(() => UserUpdateWithoutVotesInput)
    update?: UserUpdateWithoutVotesInput;
}
