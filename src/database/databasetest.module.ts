import { Module } from '@nestjs/common';
import { databasetestProviders } from './databasetest.providers';

@Module({
  providers: [...databasetestProviders],
  exports: [...databasetestProviders],
})
export class DatabaseTestsModule {}
