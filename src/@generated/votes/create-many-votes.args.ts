import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesCreateManyInput } from './votes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVotesArgs {

    @Field(() => [VotesCreateManyInput], {nullable:false})
    @Type(() => VotesCreateManyInput)
    data!: Array<VotesCreateManyInput>;
}
