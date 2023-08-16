import { Injectable } from '@nestjs/common';
import { SessionService } from 'session/session.service';
import crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(private readonly sessionService: SessionService) {}
  RegisterUserId(userId: string): void {
    const sessionId = crypto.randomBytes(32).toString('hex');
    this.sessionService.createSession(userId, sessionId);
  }
}
