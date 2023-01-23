import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcrypt';
import { Role } from './role.enum';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'cnpj_cliente', nullable: true })
  cnpjCliente: string;
  @Column({ name: 'login', nullable: true, unique: true })
  login: string;
  @Column({ name: 'matricula', nullable: true })
  matricula: string;
  @Column({ name: 'nome' })
  nome: string;
  @Column({ name: 'cpf', nullable: true })
  cpf: string;
  @Column({ name: `telefone`, length: 101, nullable: true })
  telefone: string;
  @Column({ name: `email`, nullable: true, unique: true })
  email: string;
  @Column({ name: 'senha', nullable: true })
  senha: string;
  @Column({ name: 'foto', nullable: true })
  foto: string;
  @Column({ name: 'fotob64', nullable: true, type: 'text' })
  fotob64: string;
  @Column({ name: 'fotoblob', nullable: true, type: 'blob', select: false })
  fotoblob: string;
  @Column({ name: 'digital', nullable: true })
  digital: string;
  @Column({ name: 'nfc', nullable: true })
  nfc: string;
  @Column({ name: 'face', nullable: true, length: 1000 })
  face: string;
  @Column({ name: 'data_cadastro', nullable: true })
  dataCadastro: string;
  @Column({ name: 'id_grupo_funcionalidade', nullable: true })
  roles: Role;

  @BeforeInsert()
  hasPassword() {
    this.senha = hashSync(this.senha, 10);
  }
}
