import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';
import { StudyAreaModule } from './study-area/study-area.module';
import { InstituteModule } from './institute/institute.module';

@Module({
  imports: [
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE,
    //   host: process.env.DB_HOST,
    //   port: 3306,
    //   username: process.env.DB_USER,
    //   password: process.env.DB_PASS,
    //   database: process.env.DB_TABLE,
    //   entities: ['dist/**/*.entity{.js,.ts}'],
    //   autoLoadEntities: true,
    //   synchronize: true, //*** NÃO USAR EM PRODUÇÃO!! Pode apagar os dados das tabelas!! ***
    //   //migrationsTableName: 'TbMarTelecomMigrations', se precisar mudar o nome da tabela migrations
    //   migrations: ['migration/*{.js,.ts}'],
    //   cli: {
    //     migrationDir: 'src/migrations',
    //   },
    //   logging: true,
    // } as TypeOrmModuleOptions),
    AuthModule,
    SubjectModule,
    StudyAreaModule,
    InstituteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
