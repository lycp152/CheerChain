import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class SessionService {
  private sessions: Map<string, string> = new Map<string, string>();

  createSession(userId: string, sessionId: string): void {
    this.sessions.set(userId, sessionId);
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
