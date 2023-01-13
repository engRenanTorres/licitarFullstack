module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_TABLE,
  entities: ['dist/**/*.entity{.js,.ts}'],
  autoLoadEntities: true,
  synchronize: true, //*** NÃO USAR EM PRODUÇÃO!! Pode apagar os dados das tabelas!! ***
  //migrationsTableName: 'TbMarTelecomMigrations', se precisar mudar o nome da tabela migrations
  migrations: ['migration/*{.js,.ts}'],
  cli: {
    migrationDir: 'src/migration',
  },
  logging: true,
};
