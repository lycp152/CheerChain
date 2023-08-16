import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SessionModule } from 'session/session.module';

@Module({
  imports: [SessionModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
