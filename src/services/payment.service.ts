import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentProvider } from '../providers/payment/payment.provider';
import { BillingTypeEnum } from '../enum/billingType.enum';
import { PaymentDto } from '../dto/payment.dto';
import { CustomerProvider } from '../providers/customer/customer.provider';

@Injectable()
export class PaymentService {
  constructor(
    private paymentProvider: PaymentProvider,
    private customerProvider: CustomerProvider,
  ) {}
  async createPayment(body: PaymentDto) {
    const { totalCount, data } =
      await this.customerProvider.getCustomerByCpfCnpj(body.cpfCnpj);

    if (!totalCount) {
      throw new NotFoundException('Cliente não encontrado');
    }

    if ((body.billingType as BillingTypeEnum) == BillingTypeEnum.CREDIT_CARD) {
      Object.assign(body, { totalValue: body.value });
    }

    const [customer] = data;

    const response = await this.paymentProvider.payment(customer.id, body);
    return response;
  }
}
