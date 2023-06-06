import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesCreateManyPostInput } from './votes-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class VotesCreateManyPostInputEnvelope {

    @Field(() => [VotesCreateManyPostInput], {nullable:false})
    @Type(() => VotesCreateManyPostInput)
    data!: Array<VotesCreateManyPostInput>;
}
