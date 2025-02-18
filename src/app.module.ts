import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PayController } from './controllers/pay.controller';
import { PayService } from './services/pay.service';
import { PaymentsProvider } from './providers/payments/payments';
import { HttpModule } from '@nestjs/axios';
import { CustomerProvider } from './providers/customer/customer.provider';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule.register({})],
  controllers: [AppController, PayController],
  providers: [AppService, PayService, PaymentsProvider, CustomerProvider],
})
export class AppModule {}
