import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneVotesArgs {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: VotesWhereUniqueInput;
}
