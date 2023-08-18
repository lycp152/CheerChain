import { Injectable, Scope } from '@nestjs/common';
import crypto from 'crypto';

@Injectable({ scope: Scope.DEFAULT })
export class SessionService {
  private sessions: Map<string, string> = new Map<string, string>();

  createSession(userId: string): void {
    this.sessions.set(userId, crypto.randomBytes(32).toString('hex'));
    return;
  }

  getSession(userId: string): string {
    const sessionid = this.sessions.get(userId);
    if (sessionid == undefined) {
      return '';
    }
    return this.sessions.get(userId);
  }

  deleteSession(userId: string): void {
    this.sessions.delete(userId);
  }
}
