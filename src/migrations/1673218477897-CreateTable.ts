import { MigrationInterface, QueryRunner } from "typeorm"

//npx typeorm migration:create src/migrations/CreateTable   ***criação***

export class CreateTable1673218477897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE SCHEMA [IF NOT EXISTS] `engenharia-de-concursos2`'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
// Precisa gerar a build para rodar  ***npm run build***
// npx typeorm migration:run