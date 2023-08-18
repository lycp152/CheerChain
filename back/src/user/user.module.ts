import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SessionModule } from 'session/session.module';
import { DynamodbModule } from 'dynamodb/dynamodb.module';

@Module({
  imports: [SessionModule, DynamodbModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
