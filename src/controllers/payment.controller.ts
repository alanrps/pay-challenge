import {
  BadRequestException,
  Body,
  Controller,
  HttpException,
  Post,
} from '@nestjs/common';
import { PaymentService } from '../services/payment.service';
import { AxiosError } from 'axios';
import { PaymentDto } from '../dto/payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  @Post()
  async createPayment(@Body() body: PaymentDto) {
    try {
      return await this.paymentService.createPayment(body);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new BadRequestException(error.response?.data || error.message);
      }
      if (error instanceof HttpException) {
        throw error;
      }
      throw new BadRequestException('Erro ao processar pagamento.');
    }
  }
}
