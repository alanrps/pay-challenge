import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CreateCustomerResponseDto } from 'src/dto/create-customer-response.dto';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { CustomerResponseDto } from 'src/dto/get-customer-response.dto';

@Injectable()
export class CustomerProvider {
  private readonly baseUrl = process.env.PAY_BASE_URL;
  private readonly apiKey = process.env.PAY_API_KEY;

  constructor(private readonly httpService: HttpService) {}

  async getCustomerByCpfCnpj(cpfCnpj: string): Promise<CustomerResponseDto> {
    const response = await firstValueFrom(
      this.httpService.get<CustomerResponseDto>(
        `${this.baseUrl}/v3/customers`,
        {
          params: { cpfCnpj },
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

  async createCustomer(
    customer: CreateCustomerDto,
  ): Promise<CreateCustomerResponseDto> {
    const response = await firstValueFrom(
      this.httpService.post<CreateCustomerResponseDto>(
        `${this.baseUrl}/v3/customers`,
        JSON.stringify(customer),
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
