import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesCreateInput } from './votes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVotesArgs {

    @Field(() => VotesCreateInput, {nullable:false})
    @Type(() => VotesCreateInput)
    data!: VotesCreateInput;
}
