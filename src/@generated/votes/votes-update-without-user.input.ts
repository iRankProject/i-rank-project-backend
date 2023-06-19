import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateOneRequiredWithoutVotesNestedInput } from '../post/post-update-one-required-without-votes-nested.input';

@InputType()
export class VotesUpdateWithoutUserInput {

    @Field(() => PostUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutVotesNestedInput;
}
