import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';
import { ProfesionesModule } from './profesiones/profesiones.module';

@Module({
  imports: [CargosModule, ProfesionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
