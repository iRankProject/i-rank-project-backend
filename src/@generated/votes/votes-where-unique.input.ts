import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VotesUserIdPostIdCompoundUniqueInput } from './votes-user-id-post-id-compound-unique.input';

@InputType()
export class VotesWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => VotesUserIdPostIdCompoundUniqueInput, {nullable:true})
    userId_postId?: VotesUserIdPostIdCompoundUniqueInput;
}
