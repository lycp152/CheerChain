import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DynamoDBClient, CreateTableCommand } from '@aws-sdk/client-dynamodb';
import {
  DynamoDBDocumentClient,
  PutCommand,
  GetCommand,
  DeleteCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb';

type Vote = {
  ownerid: string;
  voteid: string;
  reward: number;
};

@Injectable()
export class DynamodbService {
  private dynamoDBDocClient: DynamoDBDocumentClient;

  constructor() {
    dotenv.config();
    this.dynamoDBDocClient = DynamoDBDocumentClient.from(
      new DynamoDBClient({
        region: 'ap-northeast-1',
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
      }),
    );
  }
  SetUpUserTable() {
    const command = new CreateTableCommand({
      TableName: 'Users',
      KeySchema: [{ AttributeName: 'UserId', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'UserId', AttributeType: 'S' }],
      BillingMode: 'PROVISIONED',
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    });

    return this.resResult(command);
  }
  SetUpVoteTable() {
    const command = new CreateTableCommand({
      TableName: 'Votes',
      KeySchema: [
        { AttributeName: 'OwnerId', KeyType: 'HASH' },
        { AttributeName: 'VoteId', KeyType: 'SORT' },
      ],
      AttributeDefinitions: [
        { AttributeName: 'OwnerId', AttributeType: 'S' },
        { AttributeName: 'VoteId', AttributeType: 'S' },
      ],
      BillingMode: 'PROVISIONED',
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
    });

    return this.resResult(command);
  }

  AddToVoteTable(ownerid: string, voteid: string, reward: number) {
    const command = new PutCommand({
      TableName: 'Votes',
      Item: {
        OwnerId: ownerid,
        VoteId: voteid,
        Reward: reward,
      },
    });
    return this.resResult(command);
  }

  DownloadAllVoteTable() {
    const command = new ScanCommand({ TableName: 'Votes' });
    return this.resResult(command);
  }

  DownloadFromVoteTable(ownerid: string, voteid: string) {
    const command = new GetCommand({
      TableName: 'Votes',
      Key: {
        VoteId: voteid,
        OwnerId: ownerid,
      },
    });
    return this.resResult(command);
  }
  AddToUserTable(id: string) {
    const command = new PutCommand({
      TableName: 'Votes',
      Item: {
        UserId: id,
      },
    });
    return this.resResult(command);
  }
  DeleteFromUserTable(id: string) {
    const command = new DeleteCommand({
      TableName: 'Votes',
      Key: {
        UserId: id,
      },
    });
    return this.resResult(command);
  }

  DownloadFromUserTable(id: string) {
    const command = new GetCommand({
      TableName: 'Votes',
      Key: {
        UserId: id,
      },
    });
    return this.resResult(command);
  }
  async resResult(command) {
    const response = await this.dynamoDBDocClient.send(command);
    console.log(response);
    return JSON.stringify(response);
  }
}
