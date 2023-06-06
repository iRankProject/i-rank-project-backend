import { registerEnumType } from '@nestjs/graphql';

export enum VotesScalarFieldEnum {
    id = "id",
    total_votes = "total_votes",
    postId = "postId"
}


registerEnumType(VotesScalarFieldEnum, { name: 'VotesScalarFieldEnum', description: undefined })
