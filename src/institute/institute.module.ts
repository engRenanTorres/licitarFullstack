import { Module } from '@nestjs/common';
import { InstituteService } from './institute.service';
import { InstituteController } from './institute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from './entities/institute.entity';
import { DatabaseModule } from 'src/database/database.module';
import { instituteProviders } from './institute.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [InstituteController],
  providers: [InstituteService, ...instituteProviders],
})
export class InstituteModule {}
