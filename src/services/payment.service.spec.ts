import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';
import { PaymentProvider } from '../providers/payment/payment.provider';
import { CustomerProvider } from '../providers/customer/customer.provider';
import { NotFoundException } from '@nestjs/common';
import { BillingTypeEnum } from '../enum/billingType.enum';
import { PaymentDto } from '../dto/payment.dto';

describe('PaymentService', () => {
  let service: PaymentService;
  let customerProvider: CustomerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentService,
        {
          provide: PaymentProvider,
          useValue: {
            payment: jest.fn(),
          },
        },
        {
          provide: CustomerProvider,
          useValue: {
            getCustomerByCpfCnpj: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
    customerProvider = module.get<CustomerProvider>(CustomerProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw NotFoundException if customer is not found', async () => {
    (customerProvider.getCustomerByCpfCnpj as jest.Mock).mockResolvedValue({
      totalCount: 0,
      data: [],
    });

    const paymentDto: Partial<PaymentDto> = {
      cpfCnpj: '12345678900',
      billingType: BillingTypeEnum.BOLETO,
      value: 100,
      dueDate: '2023-12-31',
    };

    await expect(
      service.createPayment(paymentDto as PaymentDto),
    ).rejects.toThrow(new NotFoundException('Cliente não encontrado'));
  });
});
