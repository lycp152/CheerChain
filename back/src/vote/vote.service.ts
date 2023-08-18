import { Injectable } from '@nestjs/common';
import { DynamodbService } from 'dynamodb/dynamodb.service';

@Injectable()
export class VoteService {
  constructor(private readonly dynamodbService: DynamodbService) {}
  DownloadVotes() {
    const AllVotes = this.dynamodbService.DownloadAllVoteTable;
    return AllVotes;
  }
  UploadVote(ownerid: string, voteid: string, reward: number) {
    const vote = this.dynamodbService.AddToVoteTable(ownerid, voteid, reward);
  }
}
