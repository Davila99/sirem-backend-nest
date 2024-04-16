import { PartialType } from '@nestjs/mapped-types';
import { CreateProfesioneDto } from './create-profesione.dto';

export class UpdateProfesioneDto extends PartialType(CreateProfesioneDto) {}
