import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';
import { VotesCreateInput } from './votes-create.input';
import { VotesUpdateInput } from './votes-update.input';

@ArgsType()
export class UpsertOneVotesArgs {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: VotesWhereUniqueInput;

    @Field(() => VotesCreateInput, {nullable:false})
    @Type(() => VotesCreateInput)
    create!: VotesCreateInput;

    @Field(() => VotesUpdateInput, {nullable:false})
    @Type(() => VotesUpdateInput)
    update!: VotesUpdateInput;
}
