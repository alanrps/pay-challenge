import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PaymentController } from './controllers/payment.controller';
import { PaymentService } from './services/payment.service';
import { PaymentProvider } from './providers/payment/payment';
import { HttpModule } from '@nestjs/axios';
import { CustomerProvider } from './providers/customer/customer.provider';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule.register({})],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaymentService, PaymentProvider, CustomerProvider],
})
export class AppModule {}
