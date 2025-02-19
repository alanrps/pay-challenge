import { Test, TestingModule } from '@nestjs/testing';
import { CustomerProvider } from './customer.provider';
import { HttpModule } from '@nestjs/axios';

describe('Customer', () => {
  let provider: CustomerProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CustomerProvider],
    }).compile();

    provider = module.get<CustomerProvider>(CustomerProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
