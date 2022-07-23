import { MigrationInterface, QueryRunner, Table } from "typeorm";

// migration用于迁移数据库，这是给数据库添加一个表
export class CreatePost1658498257796 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // 升级数据库
    let res = await queryRunner.createTable(
      new Table({
        name: "posts",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "title", type: "varchar" },
          {
            name: "content",
            type: "text",
          },
        ],
      })
    );
    console.log(res,"=====res");
    return res;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 降级数据库
    return await queryRunner.dropTable("posts");
  }
}

