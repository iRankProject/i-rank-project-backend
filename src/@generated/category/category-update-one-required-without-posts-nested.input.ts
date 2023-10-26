import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutPostsInput } from './category-create-without-posts.input';
import { Type } from 'class-transformer';
import { CategoryCreateOrConnectWithoutPostsInput } from './category-create-or-connect-without-posts.input';
import { CategoryUpsertWithoutPostsInput } from './category-upsert-without-posts.input';
import { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutPostsInput } from './category-update-without-posts.input';

@InputType()
export class CategoryUpdateOneRequiredWithoutPostsNestedInput {

    @Field(() => CategoryCreateWithoutPostsInput, {nullable:true})
    @Type(() => CategoryCreateWithoutPostsInput)
    create?: CategoryCreateWithoutPostsInput;

    @Field(() => CategoryCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => CategoryCreateOrConnectWithoutPostsInput)
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput;

    @Field(() => CategoryUpsertWithoutPostsInput, {nullable:true})
    @Type(() => CategoryUpsertWithoutPostsInput)
    upsert?: CategoryUpsertWithoutPostsInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    @Type(() => CategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<CategoryWhereUniqueInput, 'id' | 'name'>;

    @Field(() => CategoryUpdateWithoutPostsInput, {nullable:true})
    @Type(() => CategoryUpdateWithoutPostsInput)
    update?: CategoryUpdateWithoutPostsInput;
}
