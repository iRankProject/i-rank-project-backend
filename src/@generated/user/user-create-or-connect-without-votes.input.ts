import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVotesInput } from './user-create-without-votes.input';

@InputType()
export class UserCreateOrConnectWithoutVotesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: UserCreateWithoutVotesInput;
}
