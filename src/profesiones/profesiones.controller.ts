import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesionesService } from './profesiones.service';
import { CreateProfesioneDto } from './dto/create-profesione.dto';
import { UpdateProfesioneDto } from './dto/update-profesione.dto';

@Controller('profesiones')
export class ProfesionesController {
  constructor(private readonly profesionesService: ProfesionesService) {}

  @Post()
  create(@Body() createProfesioneDto: CreateProfesioneDto) {
    return this.profesionesService.create(createProfesioneDto);
  }

  @Get()
  findAll() {
    return this.profesionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesioneDto: UpdateProfesioneDto) {
    return this.profesionesService.update(+id, updateProfesioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesionesService.remove(+id);
  }
}
