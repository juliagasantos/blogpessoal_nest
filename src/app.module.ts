import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // deixa global
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    PostagemModule,
    TemaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
