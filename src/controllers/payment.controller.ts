import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from '../services/pay.service';
import { PaymentDto } from '../dto/payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  @Post()
  async createPayment(@Body() body: PaymentDto) {
    const response = await this.paymentService.createPayment(body);

    return response;
  }
}
