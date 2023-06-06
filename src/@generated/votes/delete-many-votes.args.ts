import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereInput } from './votes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyVotesArgs {

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;
}
