import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';
import { VotesCreateWithoutPostInput } from './votes-create-without-post.input';

@InputType()
export class VotesCreateOrConnectWithoutPostInput {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: VotesWhereUniqueInput;

    @Field(() => VotesCreateWithoutPostInput, {nullable:false})
    @Type(() => VotesCreateWithoutPostInput)
    create!: VotesCreateWithoutPostInput;
}
