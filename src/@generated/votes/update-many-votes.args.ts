import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesUpdateManyMutationInput } from './votes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VotesWhereInput } from './votes-where.input';

@ArgsType()
export class UpdateManyVotesArgs {

    @Field(() => VotesUpdateManyMutationInput, {nullable:false})
    @Type(() => VotesUpdateManyMutationInput)
    data!: VotesUpdateManyMutationInput;

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;
}
