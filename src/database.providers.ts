import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_TABLE,
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true, //*** NÃO USAR EM PRODUÇÃO!! Pode apagar os dados das tabelas!! ***
        //migrationsTableName: 'TbMarTelecomMigrations', se precisar mudar o nome da tabela migrations
        migrations: ['migration/*{.js,.ts}'],
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];