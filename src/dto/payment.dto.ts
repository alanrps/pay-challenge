import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { BillingTypeEnum } from '../enum/billingType.enum';
import { Type } from 'class-transformer';

class DiscountDto {
  @IsNumber()
  @Min(0)
  value: number;

  @IsNumber()
  @Min(0)
  dueDateLimitDays: number;

  @IsString()
  @IsEnum(['PERCENTAGE', 'FIXED'], { message: 'Invalid discount type' })
  type: string;
}

class InterestDto {
  @IsNumber()
  @Min(0)
  value: number;
}

class FineDto {
  @IsNumber()
  @Min(0)
  value: number;

  @IsString()
  @IsEnum(['PERCENTAGE', 'FIXED'], { message: 'Invalid fine type' })
  type: string;
}

class CallbackDto {
  @IsString()
  successUrl: string;

  @IsBoolean()
  autoRedirect: boolean;
}

class SplitDto {
  @IsString()
  @IsNotEmpty()
  walletId: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fixedValue?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  percentualValue?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  totalFixedValue?: number;

  @IsOptional()
  @IsString()
  externalReference?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

class CreditCardDto {
  @IsString()
  @IsNotEmpty()
  holderName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{13,19}$/, {
    message: 'Card number must be between 13 and 19 digits',
  })
  number: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 2)
  @Matches(/^(0[1-9]|1[0-2])$/, {
    message: 'Expiry month must be between 01 and 12',
  })
  expiryMonth: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 4)
  @Matches(/^\d{4}$/, { message: 'Expiry year must be 4 digits' })
  expiryYear: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{3,4}$/, { message: 'CCV must be 3 or 4 digits' })
  ccv: string;
}

class CreditCardHolderInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{11}|\d{14}$/, {
    message: 'CPF deve ter 11 dígitos ou CNPJ deve ter 14 dígitos',
  })
  cpfCnpj: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{8}$/, { message: 'CEP deve ter 8 dígitos' })
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  addressNumber: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  addressComplement?: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{10,11}$/, {
    message: 'Telefone deve ter entre 10 e 11 dígitos',
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{10,11}$/, { message: 'Celular deve ter entre 10 e 11 dígitos' })
  mobilePhone: string;
}

export class PaymentDto {
  @IsString()
  cpfCnpj: string;

  @IsString()
  @IsEnum(BillingTypeEnum, { message: 'Invalid billing type' })
  billingType: string;

  @IsNumber()
  value: number;

  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string;

  @IsOptional()
  @IsString()
  externalReference: string;

  @IsOptional()
  @IsInt()
  @Max(21)
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

  @IsOptional()
  @ValidateNested()
  @Type(() => DiscountDto)
  discount: DiscountDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => InterestDto)
  interest: InterestDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SplitDto)
  split?: SplitDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => CallbackDto)
  callback: CallbackDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => FineDto)
  fine: FineDto;

  // * CREDIT CARD
  @IsOptional()
  @ValidateNested()
  @Type(() => CreditCardDto)
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.CREDIT_CARD,
  )
  creditCard?: CreditCardDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreditCardHolderInfoDto)
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.CREDIT_CARD,
  )
  creditCardHolderInfo: CreditCardHolderInfoDto;

  @IsOptional()
  @IsString()
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.CREDIT_CARD,
  )
  creditCardToken: string;

  @IsOptional()
  @IsBoolean()
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.CREDIT_CARD,
  )
  authorizeOnly: boolean;

  @IsOptional()
  @IsString()
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.CREDIT_CARD,
  )
  remoteIp: string;

  // * BOLETO
  @ValidateIf(
    (o: PaymentDto) =>
      (o.billingType as BillingTypeEnum) === BillingTypeEnum.BOLETO,
  )
  @IsOptional()
  @IsInt()
  daysAfterDueDateToRegistrationCancellation: number;
}
