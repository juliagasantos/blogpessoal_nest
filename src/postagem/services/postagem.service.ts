import { Injectable, NotFoundException } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostagemService {

  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem> //Injeção de dependência
  ) { }

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find(); // select * from tb_postagem;
  }

  async findById(id: number) {
    const postagem = await this.postagemRepository.findOne({
      where: { id }
    });

    if (!postagem) {
      throw new NotFoundException('Postagem não encontrada!');
    }

    return postagem;
  }

  async findByTitulo(titulo: string) {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`)
      }
    });
  }

  async create(postagem: Postagem) {
    return await this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem) {
  const buscaPostagem = await this.findById(postagem.id);

  if (!buscaPostagem) {
    throw new NotFoundException('Postagem não encontrada!');
  }

  return await this.postagemRepository.save(postagem);
}

async delete(id: number) {
  const postagem = await this.findById(id);

  if (!postagem) {
    throw new NotFoundException('Postagem não encontrada!');
  }

  await this.postagemRepository.delete(id);
}
}