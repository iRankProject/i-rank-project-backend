import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class VotesUncheckedUpdateManyWithoutVotesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total_votes?: IntFieldUpdateOperationsInput;
}
