import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamodbModule } from './dynamodb/dynamodb.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';
import { SessionService } from './session/session.service';
import { SessionModule } from './session/session.module';

@Module({
  imports: [DynamodbModule, UserModule, VoteModule, SessionModule],
  controllers: [AppController],
  providers: [AppService, SessionService],
})
export class AppModule {}
