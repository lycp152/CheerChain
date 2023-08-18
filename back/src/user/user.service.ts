import { Injectable } from '@nestjs/common';
import { SessionService } from 'session/session.service';
import { DynamodbService } from 'dynamodb/dynamodb.service';
import crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    private readonly sessionService: SessionService,
    private readonly dynamodbService: DynamodbService,
  ) {}
  RegisterUserId(userId: string): void {
    const sessionId = crypto.randomBytes(32).toString('hex');
    this.sessionService.createSession(userId, sessionId);
    this.dynamodbService.AddToUserTable(userId);
  }
}
