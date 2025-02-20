import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from '../services/payment.service';
import { HttpModule } from '@nestjs/axios';
import { PaymentProvider } from '../providers/payment/payment.provider';
import { CustomerProvider } from '../providers/customer/customer.provider';

describe('PayController', () => {
  let controller: PaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PaymentController],
      providers: [PaymentService, PaymentProvider, CustomerProvider],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
