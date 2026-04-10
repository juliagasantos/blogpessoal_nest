import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: "tb_postagem" }) // Cria uma tabela chamada tb_postagem
export class Postagem {

  @PrimaryGeneratedColumn() // Cria uma chave primaria e auto increment
  id!: number;

  @IsNotEmpty() // Verifica se o campo esta vazio
  @Column({ length: 100, nullable: false }) // Cria uma coluna chamada titulo, com 100 caracteres e nao pode ser nulo.
  titulo!: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto!: string;

  @UpdateDateColumn() // Cria uma coluna chamada data atualização da postagem e nao pode ser nulo
  data!: Date;


  @ManyToOne(() => Tema, (tema) => tema.postagens)
  @JoinColumn({ name: "tema_id" })
  tema!: Tema;

  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE"
  })
  usuario!: Usuario
}