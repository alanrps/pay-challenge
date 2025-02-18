import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { BoletoPaymentResponseDto } from '../../dto/create-boleto-response.dto';
import { CreateBoletoDto } from '../../dto/create-boleto.dto';

@Injectable()
export class PaymentsProvider {
  private readonly baseUrl = process.env.PAY_BASE_URL;
  private readonly apiKey = process.env.PAY_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async payment(body: CreateBoletoDto): Promise<BoletoPaymentResponseDto> {
    const response = await firstValueFrom(
      this.httpService.post<BoletoPaymentResponseDto>(
        `${this.baseUrl}/v3/payments`,
        JSON.stringify(body),
        {
          headers: {
            access_token: this.apiKey,
            accept: 'application/json',
            'content-type': 'application/json',
          },
        },
      ),
    );

    return response.data;
  }
}
