import { Inject, Injectable } from '@nestjs/common';
import { CreateStudyAreaDto } from './dto/create-study-area.dto';
import { UpdateStudyAreaDto } from './dto/update-study-area.dto';
import { StudyArea } from './entities/study-area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudyAreaService {
  constructor(
    @Inject('STUDY-AREA_REPOSITORY')
    private readonly subjectResposity: Repository<StudyArea>,
  ) {}
  create(createStudyAreaDto: CreateStudyAreaDto) {
    return 'This action adds a new studyArea';
  }

  findAll() {
    return `This action returns all studyArea`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studyArea`;
  }

  async findOneByName(name: string) {
    return await this.subjectResposity.findOneBy({ name });
  }
  
  update(id: number, updateStudyAreaDto: UpdateStudyAreaDto) {
    return `This action updates a #${id} studyArea`;
  }

  remove(id: number) {
    return `This action removes a #${id} studyArea`;
  }
}
