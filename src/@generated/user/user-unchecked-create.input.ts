import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesUncheckedCreateNestedManyWithoutUserInput } from '../votes/votes-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => VotesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    votes?: VotesUncheckedCreateNestedManyWithoutUserInput;
}
