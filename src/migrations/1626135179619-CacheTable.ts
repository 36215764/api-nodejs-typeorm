import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CacheTable1626135179619 implements MigrationInterface {
  name = 'CacheTable1626135179619';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "class" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
        "name" character varying(100) NOT NULL,
        "duration" integer NOT NULL,
        "created_At" TIMESTAMP NOT NULL DEFAULT now(),
        "updated_At" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name"),
        CONSTRAINT "PK_0b9024d21bdfba8b1bd1c300eae" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "query-result-cache"`);

    await queryRunner.query(`DROP TABLE "class"`);
  }
}
