import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';

@InputType()
export class CategoryCreateOrConnectWithoutPostsInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    @Type(() => CategoryWhereUniqueInput)
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutPostsInput, {nullable:false})
    @Type(() => CategoryCreateWithoutPostsInput)
    create!: CategoryCreateWithoutPostsInput;
}
