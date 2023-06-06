import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VotesWhereInput } from './votes-where.input';
import { Type } from 'class-transformer';
import { VotesOrderByWithRelationInput } from './votes-order-by-with-relation.input';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VotesScalarFieldEnum } from './votes-scalar-field.enum';

@ArgsType()
export class FindManyVotesArgs {

    @Field(() => VotesWhereInput, {nullable:true})
    @Type(() => VotesWhereInput)
    where?: VotesWhereInput;

    @Field(() => [VotesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VotesOrderByWithRelationInput>;

    @Field(() => VotesWhereUniqueInput, {nullable:true})
    cursor?: VotesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VotesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VotesScalarFieldEnum>;
}
