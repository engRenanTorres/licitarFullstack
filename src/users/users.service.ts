import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateSpecialUserDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Role } from './entities/role.enum';
import { DataBaseError } from '../common/errors/types/DatabaseError';

@Injectable()
export class UsersService implements OnModuleInit {
  @Inject('USER_REPOSITORY')
  private readonly usersRepository: Repository<User>;

  async onModuleInit(): Promise<void> {
    const users = await this.usersRepository.find();
    if (users.length === 0) {
      console.log('(UsersModule) adm user has been created');
      const adm: CreateSpecialUserDto = {
        name: 'Adm',
        cnpj: '00000000000',
        email: 'adm@adm.com',
        password: 'SouAdm123',
        roles: Role.ADM,
      };
      const user = this.usersRepository.create(adm); // Create apenas prepara o objeto sem salvar no bd
      await this.usersRepository.save(user);
      return;
    }
    console.log(
      '(UsersModule) dont need to create adm. users.length = ',
      users.length,
    );
    return;
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: Number(id) });
    this.checkIfUserExiste(user, id);
    return user;
  }

  async findByEmail(email: string): Promise<User> | null {
    const user = await this.usersRepository.findOneBy({ email: email });
    try {
      this.checkIfUserExiste(user, email);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
    return await this.usersRepository.findOneBy({ email: email });
  }

  async create(createUserDTO: CreateUserDto) {
    try {
      const user = this.usersRepository.create(createUserDTO); // Create apenas prepara o objeto sem salvar no bd
      return await this.usersRepository.save(user);
    } catch (error) {
      throw new DataBaseError(error.message, error.code);
    }
  }

  async update(id: string, updateUserDTO: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id: Number(id),
      ...updateUserDTO,
    });
    this.checkIfUserExiste(user, id);
    return await this.usersRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOne({
      where: { id: Number(id) },
    });
    this.checkIfUserExiste(user, id);
    return await this.usersRepository.remove(user);
  }

  private checkIfUserExiste(user: object, id: string) {
    if (!user) {
      throw new NotFoundException(`User not found by id ${id}`);
    }
  }
}
