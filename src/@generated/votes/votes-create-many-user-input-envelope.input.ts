import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateManyUserInput } from './votes-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class VotesCreateManyUserInputEnvelope {

    @Field(() => [VotesCreateManyUserInput], {nullable:false})
    @Type(() => VotesCreateManyUserInput)
    data!: Array<VotesCreateManyUserInput>;
}
