import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Tema } from "../../tema/entities/tema.entity";
import { Postagem } from "../../postagem/entities/postagem.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: this.configService.get<string>('DB_HOST'),
            port: Number(this.configService.get<string>('DB_PORT')),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASS'),
            database: this.configService.get<string>('DB_NAME'),

            entities: [Postagem, Tema, Usuario],
            synchronize: true,
        };
    }
}