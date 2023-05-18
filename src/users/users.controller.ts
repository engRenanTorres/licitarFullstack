import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../decorators/roles.decorator';
import { Role } from './entities/role.enum';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('api/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('jwt')
  @Roles(Role.ADM, Role.STAFF)
  @ApiForbiddenResponse({ description: 'Access denied.' })
  findAll(): Promise<Array<User>> {
    return this.usersService.findAll();
  }
  @Get(':id')
  findByName(@Param('id') id: string): Promise<User> | HttpException {
    const user = this.usersService.findById(id);
    return user;
  }
  @ApiResponse({ status: 409, description: 'Login already exist.' })
  @Post()
  create(@Body() body: CreateUserDto): Promise<User> | HttpException {
    return this.usersService.create(body);
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<User> | HttpException {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(id);
  }
}
