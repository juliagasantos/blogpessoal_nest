import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../services/postagem.service';


@Controller('/postagens')
export class PostagemController {

  constructor(private readonly postagemService: PostagemService) { }

  @Get()
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.postagemService.findById(id);
  }

  @Get('/titulo/:titulo')
  findByTitulo(@Param('titulo') titulo: string) {
    return this.postagemService.findByTitulo(titulo);
  }

  @Post()
  create(@Body() postagem: Postagem) {
    return this.postagemService.create(postagem);
  }

  @Put()
  update(@Body() postagem: Postagem) {
    return this.postagemService.update(postagem);
  }

  @Delete('/:id')
delete(@Param('id') id: number) {
  return this.postagemService.delete(id);
}
}