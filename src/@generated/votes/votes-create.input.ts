import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedOneWithoutVotesInput } from '../post/post-create-nested-one-without-votes.input';
import { UserCreateNestedOneWithoutVotesInput } from '../user/user-create-nested-one-without-votes.input';

@InputType()
export class VotesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => PostCreateNestedOneWithoutVotesInput, {nullable:false})
    post!: PostCreateNestedOneWithoutVotesInput;

    @Field(() => UserCreateNestedOneWithoutVotesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutVotesInput;
}
