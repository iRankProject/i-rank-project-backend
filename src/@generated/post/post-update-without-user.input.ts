import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CategoryUpdateOneRequiredWithoutPostsNestedInput } from '../category/category-update-one-required-without-posts-nested.input';
import { VotesUpdateManyWithoutPostNestedInput } from '../votes/votes-update-many-without-post-nested.input';

@InputType()
export class PostUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    content?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    score?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    winner?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutPostsNestedInput;

    @Field(() => VotesUpdateManyWithoutPostNestedInput, {nullable:true})
    votes?: VotesUpdateManyWithoutPostNestedInput;
}
