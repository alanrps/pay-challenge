import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

import { PaymentProvider } from '../providers/payment/payment';
import { HttpModule } from '@nestjs/axios';

describe('PayService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [PaymentService, PaymentProvider],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
