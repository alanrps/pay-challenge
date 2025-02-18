export class DiscountDto {
  value: number;
  limitDate: string | null;
  dueDateLimitDays: number;
  type: string;
}

export class FineDto {
  value: number;
  type: string;
}

export class InterestDto {
  value: number;
  type: string;
}

export interface BoletoPaymentResponseDto {
  object: string;
  id: string;
  dateCreated: string;
  customer: string;
  paymentLink: string | null;
  value: number;
  netValue: number;
  originalValue: number | null;
  interestValue: number | null;
  description: string | null;
  billingType: string;
  canBePaidAfterDueDate: boolean;
  pixTransaction: string | null;
  status: string;
  dueDate: string;
  originalDueDate: string;
  paymentDate: string | null;
  clientPaymentDate: string | null;
  installmentNumber: number | null;
  invoiceUrl: string;
  invoiceNumber: string;
  externalReference: string | null;
  deleted: boolean;
  anticipated: boolean;
  anticipable: boolean;
  creditDate: string | null;
  estimatedCreditDate: string | null;
  transactionReceiptUrl: string | null;
  nossoNumero: string;
  bankSlipUrl: string;
  lastInvoiceViewedDate: string | null;
  lastBankSlipViewedDate: string | null;
  discount: DiscountDto;
  fine: FineDto;
  interest: InterestDto;
  postalService: boolean;
  custody: string | null;
  refunds: string | null;
}
