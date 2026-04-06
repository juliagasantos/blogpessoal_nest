import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Tema } from '../entities/tema.entity';

@Injectable()
export class TemaService {

  constructor(
    @InjectRepository(Tema)
    private readonly temaRepository: Repository<Tema>,
  ) {}

  findAll() {
    return this.temaRepository.find({
      relations: ['postagens'],
    });
  }

  findById(id: number) {
    return this.temaRepository.findOne({
      where: { id },
      relations: ['postagens'],
    });
  }

  findByDescricao(descricao: string) {
    return this.temaRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
    });
  }

  create(tema: Tema) {
    return this.temaRepository.save(tema);
  }

  update(tema: Tema) {
    return this.temaRepository.save(tema);
  }

  delete(id: number) {
    return this.temaRepository.delete(id);
  }
}