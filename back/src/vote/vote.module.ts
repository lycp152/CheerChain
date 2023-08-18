import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';

import { DynamodbModule } from 'dynamodb/dynamodb.module';

@Module({
  controllers: [VoteController],
  providers: [VoteService],
  imports:[DynamodbModule]
})
export class VoteModule {}
