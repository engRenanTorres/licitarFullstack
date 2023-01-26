//import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { config } from 'dotenv';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';

config({
  path: process.env.NODE_ENV === 'test' ? '.env.testing' : '.env',
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api backend do Engenharia de concursos')
    .setDescription('Api para backend')
    .setVersion('1.0')
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
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.APP_PORT);
}
bootstrap();
