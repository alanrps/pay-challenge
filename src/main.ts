import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().then(
  () => console.log('Aplicação iniciada com sucesso!'),
  (err) => {
    console.error('Erro ao iniciar a aplicação:', err);
    process.exit(1);
  },
);
