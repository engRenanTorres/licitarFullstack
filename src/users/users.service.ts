import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
  @Inject('USER_REPOSITORY')
  private readonly usersRepository: Repository<User>;

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id: Number(id) });
    this.checkIfUserExiste(user, id);
    return user;
  }

  async findBylogin(login: string): Promise<User> | null {
    const user = await this.usersRepository.findOneBy({ login: login });
    try {
      this.checkIfUserExiste(user, login);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
    return await this.usersRepository.findOneBy({ login: login });
  }

  async create(createUserDTO: CreateUserDto) {
    const user = this.usersRepository.create(createUserDTO); // Create apenas prepara o objeto sem salvar no bd
    return this.usersRepository.save(user);
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
