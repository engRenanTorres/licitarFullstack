import { Test, TestingModule } from '@nestjs/testing';
import { StudyAreaService } from './study-area.service';

describe('StudyAreaService', () => {
  let service: StudyAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyAreaService],
    }).compile();

    service = module.get<StudyAreaService>(StudyAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
