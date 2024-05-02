import { Test, TestingModule } from '@nestjs/testing';
import { TutoresController } from './tutores.controller';
import { TutoresService } from './tutores.service';

describe('TutoresController', () => {
  let controller: TutoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutoresController],
      providers: [TutoresService],
    }).compile();

    controller = module.get<TutoresController>(TutoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
