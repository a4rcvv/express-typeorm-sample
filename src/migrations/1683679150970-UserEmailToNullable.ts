import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEmailToNullable1683679150970 implements MigrationInterface {
  name = "UserEmailToNullable1683679150970";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "email" DROP NOT NULL
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "user"
            ALTER COLUMN "email"
            SET NOT NULL
        `);
  }
}
