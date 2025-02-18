import { Injectable } from '@nestjs/common';
import { PaymentProvider } from '../providers/payment/payment';
import { PaymentDto } from '../dto/payment.dto';

@Injectable()
export class PaymentService {
  constructor(private paymentProvider: PaymentProvider) {}
  async createPayment(body: PaymentDto) {
    const response = await this.paymentProvider.payment(body);
    return response;
  }
}
