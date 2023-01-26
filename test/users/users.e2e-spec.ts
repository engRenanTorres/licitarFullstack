import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../../src/users/users.module';
import { AuthModule } from '../../src/auth/auth.module';
import { DatabaseModule } from '../../src/database/database.module';
import { User } from '../../src/users/entities/user.entity';
import { Role } from '../../src/users/entities/role.enum';
import { CreateUserDto } from '../../src/users/dto/create-user.dto';
import { UpdateUserDto } from '../../src/users/dto/update-user.dto/update-user.dto';
import { LocalStrategy } from '../../src/strategies/local.strategy';
import { JwtStrategy } from '../../src/strategies/jwt.strategy';
import { AuthService } from '../../src/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { RolesGuard } from '../../src/auth/guard/role.guard';

describe('Users: /users (e2e)', () => {
  let app: INestApplication;
  let id: string;
  let auth: string;

  const user: CreateUserDto = {
    nome: 'Rodrigo',
    login: 'rodrigo',
    roles: Role.OperadorCC2,
    senha: 'TestBolado3!',
    matricula: '9081',
    email: 'rod@rod.com.br',
  };

  const login = {
    login: 'renan',
    password: 'TestBolado3!',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();

    const response = await request(app.getHttpServer())
      .post('/api/auth/login')
      .send(login);

    auth = response.body.token;
  });

  afterAll(async () => {
    await app.close();
  });

  it('should denny access to Create (POST) /users', async () => {
    const createTest = async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/api/users')
        .send(user);
      expect(createResponse.status).toStrictEqual(HttpStatus.UNAUTHORIZED);
    };
    return await createTest();
  });
  it('should Create (POST) /users', async () => {
    const createTest = async () => {
      const createResponse = await request(app.getHttpServer())
        .post('/api/users')
        .send(user)
        .set('Authorization', `Bearer ${auth}`);
      id = createResponse.body.id;
      const expectedUser = {
        nome: 'Rodrigo',
        login: 'rodrigo',
        roles: Role.OperadorCC2,
        matricula: '9081',
        email: 'rod@rod.com.br',
      };
      expect(createResponse.status).toStrictEqual(HttpStatus.CREATED);
      expect(createResponse.body).toMatchObject(expectedUser);
    };
    return await createTest();
  });

  it.todo('should deny to create user when it send incorrect params');
  it('should denny access to update (PUT) /users', async () => {
    const updateUser: UpdateUserDto = {
      ...user,
      nome: 'Augusto',
      senha: undefined,
    };

    const updateTest = async () => {
      return await request(app.getHttpServer())
        .put('/api/users/' + id)
        .send(updateUser)
        .expect(HttpStatus.UNAUTHORIZED);
    };
    return await updateTest();
  });
  it('should update (PUT) /users', async () => {
    const updateUser: UpdateUserDto = {
      ...user,
      nome: 'Augusto',
      senha: undefined,
    };

    const updateTest = async () => {
      return await request(app.getHttpServer())
        .put('/api/users/' + id)
        .send(updateUser)
        .set('Authorization', `Bearer ${auth}`)
        .expect(HttpStatus.OK)
        .then(({ body }) => {
          const expectedUser = {
            nome: 'Augusto',
            login: 'rodrigo',
            roles: Role.OperadorCC2,
            matricula: '9081',
            email: 'rod@rod.com.br',
          };

          expect(body).toMatchObject(expectedUser);
        });
    };
    return await updateTest();
  });
  it.todo('should (GET) /users');
  it('should denny access to remove (DELETE) /', async () => {
    const deleteTeste = async () => {
      return await request(app.getHttpServer())
        .delete(`/api/users/` + id)
        .expect(HttpStatus.UNAUTHORIZED);
    };
    return await deleteTeste();
  });
  it('should remove (DELETE) /', async () => {
    const deleteTeste = async () => {
      return await request(app.getHttpServer())
        .delete(`/api/users/` + id)
        .set('Authorization', `Bearer ${auth}`)
        .expect(HttpStatus.NO_CONTENT);
    };
    return await deleteTeste();
  });
});
