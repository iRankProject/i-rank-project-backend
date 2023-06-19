import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutVotesInput } from './user-update-without-votes.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutVotesInput } from './user-create-without-votes.input';

@InputType()
export class UserUpsertWithoutVotesInput {

    @Field(() => UserUpdateWithoutVotesInput, {nullable:false})
    @Type(() => UserUpdateWithoutVotesInput)
    update!: UserUpdateWithoutVotesInput;

    @Field(() => UserCreateWithoutVotesInput, {nullable:false})
    @Type(() => UserCreateWithoutVotesInput)
    create!: UserCreateWithoutVotesInput;
}
