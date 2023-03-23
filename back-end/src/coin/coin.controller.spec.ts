import { Test, TestingModule } from '@nestjs/testing';
import { CoinController } from './coin.controller';

describe('CoinController', () => {
  let controller: CoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoinController],
    }).compile();

    controller = module.get<CoinController>(CoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
