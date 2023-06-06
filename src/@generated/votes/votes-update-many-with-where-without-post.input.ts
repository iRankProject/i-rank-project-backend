import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesScalarWhereInput } from './votes-scalar-where.input';
import { Type } from 'class-transformer';
import { VotesUpdateManyMutationInput } from './votes-update-many-mutation.input';

@InputType()
export class VotesUpdateManyWithWhereWithoutPostInput {

    @Field(() => VotesScalarWhereInput, {nullable:false})
    @Type(() => VotesScalarWhereInput)
    where!: VotesScalarWhereInput;

    @Field(() => VotesUpdateManyMutationInput, {nullable:false})
    @Type(() => VotesUpdateManyMutationInput)
    data!: VotesUpdateManyMutationInput;
}
