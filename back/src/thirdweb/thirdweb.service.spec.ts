import { Test, TestingModule } from '@nestjs/testing';
import { ThirdwebService } from './thirdweb.service';

describe('ThirdwebService', () => {
  let service: ThirdwebService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdwebService],
    }).compile();

    service = module.get<ThirdwebService>(ThirdwebService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
