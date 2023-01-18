import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../../src/users/users.module';
import { DatabaseModule } from '../../src/database/database.module';
import { User } from '../../src/users/entities/user.entity';
import { Role } from '../../src/users/entities/role.enum';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';


describe('Users: /users (e2e)', () => {
  let app: INestApplication;

  const user: CreateUserDto = {
    nome: 'Renan',
    login:'renan',
    roles: Role.AdmMT,
    senha: 'TestBolado3!',
    matricula: '9080',
    email: 'renan@renan.com.br'
  }

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, DatabaseModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      })
    )
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create (POST) /users', async () => {
    return request(app.getHttpServer())
      .post('/api/users')
      .send(user)
      .expect(HttpStatus.CREATED)
      .then(({body})=>{
        const expectedUser = {
          nome: 'Renan',
          login:'renan',
          roles: Role.AdmMT,
          matricula: '9080',
          email: 'renan@renan.com.br'
        };
        expect(user).toMatchObject(expectedUser);
      });
  });
});
