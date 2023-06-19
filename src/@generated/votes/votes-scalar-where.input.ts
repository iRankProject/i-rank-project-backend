import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;
}
