import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutVotesInput } from './user-create-without-votes.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutVotesInput } from './user-create-or-connect-without-votes.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutVotesInput {

    @Field(() => UserCreateWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateWithoutVotesInput)
    create?: UserCreateWithoutVotesInput;

    @Field(() => UserCreateOrConnectWithoutVotesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutVotesInput)
    connectOrCreate?: UserCreateOrConnectWithoutVotesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
