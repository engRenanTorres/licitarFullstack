import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';
import { MessagesHelper } from 'src/helpers/message.helper';
import { RegexHelper } from 'src/helpers/regex.helper';
import { Role } from '../entities/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome completo do usuário.' })
  readonly nome: string;
  @IsString()
  readonly matricula: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome para acesso do usuário.' })
  readonly login: string;
  @IsString()
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: MessagesHelper.PASSWORD_VALID })
  @Matches(RegexHelper.password, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  readonly senha: string;
  @IsNumber()
  @ApiProperty({ description: 'Nível de acesso do usuário.', default: 5 })
  readonly roles: Role;
}
