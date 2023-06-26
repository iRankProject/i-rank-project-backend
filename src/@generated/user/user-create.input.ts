import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateNestedManyWithoutUserInput } from '../votes/votes-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    hashedRefreshToken?: string;

    @Field(() => VotesCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VotesCreateNestedManyWithoutUserInput;
}
