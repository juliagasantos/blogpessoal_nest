import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TemaService } from '../services/tema.service';
import { Tema } from '../entities/tema.entity';

@Controller('temas')
export class TemaController {

  constructor(private readonly temaService: TemaService) {}

  @Get()
  findAll() {
    return this.temaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.temaService.findById(id);
  }

  @Get('/descricao/:descricao')
  findByDescricao(@Param('descricao') descricao: string) {
    return this.temaService.findByDescricao(descricao);
  }

  @Post()
  create(@Body() tema: Tema) {
    return this.temaService.create(tema);
  }

  @Put()
  update(@Body() tema: Tema) {
    return this.temaService.update(tema);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.temaService.delete(id);
  }
}