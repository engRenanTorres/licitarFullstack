import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api backend OLS-MTC')
    .setDescription('Api para backend')
    .setVersion('2.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  ); //whitelist garante que a api só recebera os parametros selecionados(parâmetros do objeto DTO)
  //forbidNonWhitelisted emite um erro se for enviador parâmetros a mais do que o esperado.
  //transform tipa o objeto diretamento com o seu dto
  await app.listen(process.env.APP_PORT);
}
bootstrap();
