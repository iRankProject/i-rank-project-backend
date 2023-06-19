import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutVotesNestedInput } from '../user/user-update-one-required-without-votes-nested.input';

@InputType()
export class VotesUpdateWithoutPostInput {

    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;
}
