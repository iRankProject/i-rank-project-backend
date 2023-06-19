import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutVotesInput } from '../user/user-create-nested-one-without-votes.input';

@InputType()
export class VotesCreateWithoutPostInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVotesInput;
}
