import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PostUpdateOneRequiredWithoutVotesNestedInput } from '../post/post-update-one-required-without-votes-nested.input';

@InputType()
export class VotesUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total_votes?: IntFieldUpdateOperationsInput;

    @Field(() => PostUpdateOneRequiredWithoutVotesNestedInput, {nullable:true})
    post?: PostUpdateOneRequiredWithoutVotesNestedInput;
}
