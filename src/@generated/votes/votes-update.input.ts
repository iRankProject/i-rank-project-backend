import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateOneRequiredWithoutVotesNestedInput } from '../post/post-update-one-required-without-votes-nested.input';
import { UserUpdateOneRequiredWithoutVotesNestedInput } from '../user/user-update-one-required-without-votes-nested.input';

@InputType()
export class VotesUpdateInput {

    @Field(() => PostUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutVotesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutVotesNestedInput;
}
