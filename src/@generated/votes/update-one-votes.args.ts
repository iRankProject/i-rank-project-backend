import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesUpdateInput } from './votes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VotesWhereUniqueInput } from './votes-where-unique.input';

@ArgsType()
export class UpdateOneVotesArgs {

    @Field(() => VotesUpdateInput, {nullable:false})
    @Type(() => VotesUpdateInput)
    data!: VotesUpdateInput;

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: Prisma.AtLeast<VotesWhereUniqueInput, 'id' | 'userId_postId'>;
}
