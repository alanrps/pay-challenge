import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { BillingType } from '../enum/billingType.enum';

export class CreateBoletoDto {
  // required
  @IsString()
  customer: string;

  @IsEnum(BillingType, { message: 'Invalid billing type' })
  billingType: string;

  @IsNumber()
  value: number;

  @IsString()
  dueDate: string;

  // optional
  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsInt()
  daysAfterDueDateToRegistrationCancellation: number;

  @IsOptional()
  @IsString()
  externalReference: string;

  @IsOptional()
  @IsInt()
  installmentCount: number;

  @IsOptional()
  @IsNumber()
  totalValue: number;

  @IsOptional()
  @IsNumber()
  installmentValue: number;

  @IsOptional()
  @IsBoolean()
  postalService: boolean;

  // split;
  // callback;
  // discount;
  // interest;
  // fine;

  // ! ADICIONAR CAMPOS DO CARTÃO DE CRÉDITO - CRIAR CLASSE E OUTRA EXTENDENDO PARA O CARTÃO
}
