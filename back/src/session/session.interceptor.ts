import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable()
export class SessionInterceptor implements NestInterceptor {
  constructor(private readonly sessionService: SessionService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    if (this.conformSession(request)) {
      throw new UnauthorizedException('Invalid session');
    }
    return next.handle();
  }

  private conformSession(request): Boolean {
    const sessionId: string = request.query.sessionId;
    const userId: string = request.query.userId;
    return this.sessionService.getSession(userId) !== sessionId;
  }
}
