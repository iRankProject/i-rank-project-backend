import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VotesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    total_votes?: true;
}
