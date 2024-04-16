import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';
import { ProfesionesModule } from './profesiones/profesiones.module';
import { GradosModule } from './grados/grados.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';

@Module({
  imports: [CargosModule, ProfesionesModule, GradosModule, AsignaturasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
