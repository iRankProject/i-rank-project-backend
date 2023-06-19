import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesScalarWhereInput } from './votes-scalar-where.input';
import { Type } from 'class-transformer';
import { VotesUncheckedUpdateManyWithoutVotesInput } from './votes-unchecked-update-many-without-votes.input';

@InputType()
export class VotesUpdateManyWithWhereWithoutPostInput {

    @Field(() => VotesScalarWhereInput, {nullable:false})
    @Type(() => VotesScalarWhereInput)
    where!: VotesScalarWhereInput;

    @Field(() => VotesUncheckedUpdateManyWithoutVotesInput, {nullable:false})
    @Type(() => VotesUncheckedUpdateManyWithoutVotesInput)
    data!: VotesUncheckedUpdateManyWithoutVotesInput;
}
