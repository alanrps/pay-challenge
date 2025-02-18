import {
  IsString,
  IsOptional,
  IsBoolean,
  IsEmail,
  IsNumberString,
  Length,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsNumberString()
  @Length(11, 14)
  cpfCnpj: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  company?: string | null;

  @IsOptional()
  @IsNumberString()
  phone?: string;

  @IsNumberString()
  mobilePhone: string;

  @IsString()
  address: string;

  @IsString()
  addressNumber: string;

  @IsOptional()
  @IsString()
  complement?: string;

  @IsString()
  province: string;

  @IsNumberString()
  postalCode: string;

  @IsString()
  personType: string;

  @IsBoolean()
  deleted: boolean;

  @IsOptional()
  @IsString()
  additionalEmails?: string | null;

  @IsOptional()
  @IsString()
  externalReference?: string | null;

  @IsBoolean()
  notificationDisabled: boolean;

  @IsOptional()
  @IsString()
  observations?: string | null;

  @IsOptional()
  @IsString()
  municipalInscription?: string | null;

  @IsOptional()
  @IsString()
  stateInscription?: string | null;

  @IsNumberString()
  city: number;

  @IsString()
  cityName: string;

  @IsString()
  state: string;

  @IsString()
  country: string;
}
