import { Body, Controller, Post } from '@nestjs/common';
import { PayService } from '../services/pay.service';
import { CreateBoletoDto } from '../dto/create-boleto.dto';

@Controller('pay')
export class PayController {
  constructor(private payService: PayService) {}
  @Post()
  async createBoleto(@Body() body: CreateBoletoDto) {
    const response = await this.payService.createBoleto(body);

    return response;
  }
}
