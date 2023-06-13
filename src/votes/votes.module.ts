import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesResolver } from './votes.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [VotesResolver, VotesService, PrismaService],
})
export class VotesModule {}
