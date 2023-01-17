import { join } from 'path';
import { DataSource } from 'typeorm';
import { CreateTable1673218477897 } from '../migrations/1673218477897-CreateTable';

export const databasetestProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 5201,
        username: 'tests',
        password: 'password',
        database: 'engenharia-de-concursos',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true, //*** NÃO USAR EM PRODUÇÃO!! Pode apagar os dados das tabelas!! ***
        //migrationsTableName: 'TbMarTelecomMigrations', se precisar mudar o nome da tabela migrations
        //logging: true,
      });

      return dataSource.initialize();
    },
  },
];
export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 5201,
  username: 'tests',
  password: 'password',
  database: 'engenharia-de-concursos',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true, //*** NÃO USAR EM PRODUÇÃO!! Pode apagar os dados das tabelas!! ***
  //migrationsTableName: 'TbMarTelecomMigrations', se precisar mudar o nome da tabela migrations
  //logging: true,
  migrations: [CreateTable1673218477897],
});
