import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';

@InputType()
export class VotesWhereInput {

    @Field(() => [VotesWhereInput], {nullable:true})
    AND?: Array<VotesWhereInput>;

    @Field(() => [VotesWhereInput], {nullable:true})
    OR?: Array<VotesWhereInput>;

    @Field(() => [VotesWhereInput], {nullable:true})
    NOT?: Array<VotesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    total_votes?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    postId?: StringFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;
}
