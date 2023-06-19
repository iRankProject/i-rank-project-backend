import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesUncheckedUpdateManyInput } from './votes-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { VotesWhereInput } from './votes-where.input';

@ArgsType()
export class UpdateManyVotesArgs {

    @Field(() => VotesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => VotesUncheckedUpdateManyInput)
    data!: VotesUncheckedUpdateManyInput;

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;
}
