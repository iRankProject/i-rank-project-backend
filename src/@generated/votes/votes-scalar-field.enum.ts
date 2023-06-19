import { registerEnumType } from '@nestjs/graphql';

export enum VotesScalarFieldEnum {
    id = "id",
    userId = "userId",
    postId = "postId"
}


registerEnumType(VotesScalarFieldEnum, { name: 'VotesScalarFieldEnum', description: undefined })
