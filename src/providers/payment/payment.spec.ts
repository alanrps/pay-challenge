import { Test, TestingModule } from '@nestjs/testing';
import { PaymentProvider } from './payment.provider';
import { HttpModule } from '@nestjs/axios';

describe('Pay', () => {
  let provider: PaymentProvider;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PaymentProvider],
    }).compile();
    provider = module.get<PaymentProvider>(PaymentProvider);
  });
  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
