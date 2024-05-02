import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';
import { ProfesionesModule } from './profesiones/profesiones.module';
import { GradosModule } from './grados/grados.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { TurnosModule } from './turnos/turnos.module';
import { SeccionesModule } from './secciones/secciones.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { TutoresModule } from './tutores/tutores.module';

@Module({
  imports: [CargosModule, ProfesionesModule, GradosModule, AsignaturasModule, TurnosModule, SeccionesModule, EmpleadosModule, TutoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
