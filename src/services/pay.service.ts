import { Injectable } from '@nestjs/common';
import { PayProvider } from '../providers/payments/payments';
import { CreateBoletoDto } from '../dto/create-boleto.dto';

@Injectable()
export class PayService {
  constructor(private payProvider: PayProvider) {}
  async createBoleto(body: CreateBoletoDto) {
    const response = await this.payProvider.payment(body);
    return response;
  }
}
