import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User) {
    const payload = {
      sub: user.id,
      login: user.email,
      role: user.roles,
    };

    return {
      token: this.jwtService.sign(payload, {}),
    };
  }

  async validateUser(login: string, senha: string) {
    let user: User;
    try {
      user = await this.userService.findBylogin(login);
    } catch (error) {
      return null;
    }
    const isPasswordValid = compareSync(senha, user.senha);
    if (!isPasswordValid) return null;
    return user;
  }
}
