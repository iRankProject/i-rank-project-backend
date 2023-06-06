import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesWhereUniqueInput } from './votes-where-unique.input';
import { Type } from 'class-transformer';
import { VotesUpdateWithoutPostInput } from './votes-update-without-post.input';

@InputType()
export class VotesUpdateWithWhereUniqueWithoutPostInput {

    @Field(() => VotesWhereUniqueInput, {nullable:false})
    @Type(() => VotesWhereUniqueInput)
    where!: VotesWhereUniqueInput;

    @Field(() => VotesUpdateWithoutPostInput, {nullable:false})
    @Type(() => VotesUpdateWithoutPostInput)
    data!: VotesUpdateWithoutPostInput;
}
