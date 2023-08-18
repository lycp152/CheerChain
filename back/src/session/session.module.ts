import { Module } from '@nestjs/common';
import { SessionInterceptor } from './session.interceptor';
import { SessionService } from './session.service';
@Module({
  providers: [SessionInterceptor, SessionService],
  exports: [SessionInterceptor, SessionService],
})
export class SessionModule {}
