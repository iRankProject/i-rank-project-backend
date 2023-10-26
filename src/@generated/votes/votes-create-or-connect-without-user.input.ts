import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';
import { VotesCreateWithoutUserInput } from './votes-create-without-user.input';

@InputType()
export class VotesCreateOrConnectWithoutUserInput {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>;

    @Field(() => VotesCreateWithoutUserInput, {nullable:false})
    @Type(() => VotesCreateWithoutUserInput)
    create!: VotesCreateWithoutUserInput;
}
