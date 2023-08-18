import { Controller, Get, Post, UseInterceptors, Body } from '@nestjs/common';
import { VoteService } from './vote.service';
import { SessionInterceptor } from 'session/session.interceptor';

type Vote = {
  ownerid: string;
  voteid: string;
  reward: number;
};

@UseInterceptors(SessionInterceptor)
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}
  @Get('')
  getVotes() {
    return this.voteService.DownloadVotes();
  }
  @Post('')
  postVotes(@Body() data: Vote) {
    return this.voteService.UploadVote(data.ownerid, data.voteid, data.reward);
  }
}
