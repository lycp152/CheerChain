import { Injectable } from '@nestjs/common';
import { SessionService } from 'session/session.service';
import { DynamodbService } from 'dynamodb/dynamodb.service';

@Injectable()
export class UserService {
  constructor(
    private readonly sessionService: SessionService,
    private readonly dynamodbService: DynamodbService,
  ) {}
  RegisterUserId(userId: string): void {
    //this.sessionService.createSession(userId);
    this.dynamodbService.AddToUserTable(userId);
  }
}
