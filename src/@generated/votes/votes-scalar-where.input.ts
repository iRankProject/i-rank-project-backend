import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class VotesScalarWhereInput {

    @Field(() => [VotesScalarWhereInput], {nullable:true})
    AND?: Array<VotesScalarWhereInput>;

    @Field(() => [VotesScalarWhereInput], {nullable:true})
    OR?: Array<VotesScalarWhereInput>;

    @Field(() => [VotesScalarWhereInput], {nullable:true})
    NOT?: Array<VotesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    total_votes?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;
}
