import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutCategoryInput } from '../post/post-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => PostUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput;
}
