import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesWhereInput } from './votes-where.input';

@InputType()
export class VotesListRelationFilter {

    @Field(() => VotesWhereInput, {nullable:true})
    every?: VotesWhereInput;

    @Field(() => VotesWhereInput, {nullable:true})
    some?: VotesWhereInput;

    @Field(() => VotesWhereInput, {nullable:true})
    none?: VotesWhereInput;
}
