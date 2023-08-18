import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamodbModule } from './dynamodb/dynamodb.module';
import { UserModule } from './user/user.module';
import { VoteModule } from './vote/vote.module';
import { SessionService } from './session/session.service';
import { SessionModule } from './session/session.module';
import { ThirdwebService } from './thirdweb/thirdweb.service';

@Module({
  imports: [DynamodbModule, UserModule, VoteModule, SessionModule],
  controllers: [AppController],
  providers: [AppService, SessionService, ThirdwebService],
})
export class AppModule {}
