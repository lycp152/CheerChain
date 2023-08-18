import { Injectable } from '@nestjs/common';
import { DynamodbService } from 'dynamodb/dynamodb.service';
import { ThirdwebService } from 'thirdweb/thirdweb.service';
import crypto from 'crypto';

@Injectable()
export class VoteService {
  constructor(
    private readonly dynamodbService: DynamodbService,
    private readonly thirdwebService: ThirdwebService,
  ) {}

  DownloadVotes() {
    const AllVotes = this.dynamodbService.DownloadAllVoteTable;
    return AllVotes;
  }

  DownloadVote(id: string) {
    const AllVotes = this.dynamodbService.DownloadAllVoteTable;
    return AllVotes;
  }

  UploadVote(
    ownerid: string,
    title: string,
    item: string[],
    reward: number,
    count: number,
  ) {
    const voteid = crypto.randomBytes(32).toString('hex');
    const vote = this.dynamodbService.AddToVoteTable(ownerid, voteid, reward);
  }
  SubmitVoteAnswer(
    ownerid: string,
    respondentid: string,
    selecteditem: string,
  ) {}
}
