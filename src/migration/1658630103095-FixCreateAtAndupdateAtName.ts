import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCreateAtAndupdateAtName1658630103095
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("users", "createAt", "createdAt");
    await queryRunner.renameColumn("users", "updateAt", "updatedAt");
    await queryRunner.renameColumn("posts", "createAt", "createdAt");
    await queryRunner.renameColumn("posts", "updateAt", "updatedAt");
    await queryRunner.renameColumn("comments", "createAt", "createdAt");
    await queryRunner.renameColumn("comments", "updateAt", "updatedAt");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn("users", "createdAt", "createAt");
    await queryRunner.renameColumn("users", "updatedAt", "updateAt");
    await queryRunner.renameColumn("posts", "createdAt", "createAt");
    await queryRunner.renameColumn("posts", "updatedAt", "updateAt");
    await queryRunner.renameColumn("comments", "createdAt", "createAt");
    await queryRunner.renameColumn("comments", "updatedAt", "updateAt");
  }
}
