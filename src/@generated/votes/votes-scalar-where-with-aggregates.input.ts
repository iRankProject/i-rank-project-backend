import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class VotesScalarWhereWithAggregatesInput {

    @Field(() => [VotesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VotesScalarWhereWithAggregatesInput>;

    @Field(() => [VotesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VotesScalarWhereWithAggregatesInput>;

    @Field(() => [VotesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VotesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    total_votes?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    postId?: StringWithAggregatesFilter;
}
