import { Controller, UseGuards, Post } from '@nestjs/common';
import { Body, Req } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SigninDTO } from '../users/dto/signin.dto';
import { User } from '../users/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

interface ReqLocal extends Request {
  user: User;
}

@Controller('api/auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(
    @Body() signinDTO: SigninDTO,
    @Req() req: ReqLocal,
  ): Promise<object> {
    return await this.authService.login(req.user);
  }
}
