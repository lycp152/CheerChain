import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  Body,
  Param,
} from '@nestjs/common';
import { VoteService } from './vote.service';
import { SessionInterceptor } from 'session/session.interceptor';

type Vote = {
  ownerid: string;
  voteid: string;
  title: string;
  item: string[];
  reward: number;
  count: number;
};

type Answer = {
  voteid: string;
  respondentid: string;
  selecteditem: string;
};
//@UseInterceptors(SessionInterceptor)
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}
  @Get('')
  getVotes() {
    return this.voteService.DownloadVotes();
  }

  @Get('voteid/:id')
  getVote(@Param('id') id: string) {
    return this.voteService.DownloadVote(id);
  }

  @Post('submit')
  postVoteAnswer(@Body() body: Answer) {
    this.voteService.SubmitVoteAnswer(
      body.voteid,
      body.respondentid,
      body.selecteditem,
    );
  }
  @Post('')
  postVote(@Body() body: Vote) {
    this.voteService.UploadVote(
      body.ownerid,
      body.title,
      body.item,
      body.reward,
      body.count,
    );
  }
}
