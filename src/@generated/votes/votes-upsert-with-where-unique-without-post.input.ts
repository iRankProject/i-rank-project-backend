import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';
import { VotesUpdateWithoutPostInput } from './votes-update-without-post.input';
import { VotesCreateWithoutPostInput } from './votes-create-without-post.input';

@InputType()
export class VotesUpsertWithWhereUniqueWithoutPostInput {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>;

    @Field(() => VotesUpdateWithoutPostInput, {nullable:false})
    @Type(() => VotesUpdateWithoutPostInput)
    update!: VotesUpdateWithoutPostInput;

    @Field(() => VotesCreateWithoutPostInput, {nullable:false})
    @Type(() => VotesCreateWithoutPostInput)
    create!: VotesCreateWithoutPostInput;
}
