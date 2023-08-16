import { Test, TestingModule } from '@nestjs/testing';
import { DynamodbController } from './dynamodb.controller';

describe('DynamodbController', () => {
  let controller: DynamodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamodbController],
    }).compile();

    controller = module.get<DynamodbController>(DynamodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
