import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PayController } from './controllers/pay.controller';
import { PayService } from './services/pay.service';
import { PayProvider } from './providers/payments/payments';
import { HttpModule } from '@nestjs/axios';
import { Customer } from './providers/customer/customer.provider';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule.register({})],
  controllers: [AppController, PayController],
  providers: [AppService, PayService, PayProvider, Customer],
})
export class AppModule {}
