import { Injectable } from '@nestjs/common';
import { CreateProfesioneDto } from './dto/create-profesione.dto';
import { UpdateProfesioneDto } from './dto/update-profesione.dto';

@Injectable()
export class ProfesionesService {
  create(createProfesioneDto: CreateProfesioneDto) {
    return 'This action adds a new profesione';
  }

  findAll() {
    return `This action returns all profesiones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profesione`;
  }

  update(id: number, updateProfesioneDto: UpdateProfesioneDto) {
    return `This action updates a #${id} profesione`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesione`;
  }
}
