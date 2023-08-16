import { Module } from '@nestjs/common';
import { SessionInterceptor } from './session.interceptor';
import { SessionService } from './session.service';
@Module({
  providers: [SessionInterceptor],
  exports: [SessionInterceptor, SessionService],
})
export class SessionModule {}
