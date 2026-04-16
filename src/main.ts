import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  //Cnfiguração da aplicação nest, cria a aplicação
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Generation Brasil","http://www.generationbrasil.online","generation@email.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  //configuração do timezone
  process.env.TZ = '-03:00';

  //configuração  de validação de dados de entrada
  app.useGlobalPipes(new ValidationPipe());

  //configuração de cors pra permitir requisições de outras origens
  app.enableCors();

  //execução da aplicação nest, configuração da porta
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
