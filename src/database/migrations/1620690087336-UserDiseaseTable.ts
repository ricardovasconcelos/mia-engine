import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserDiseaseTable1620690087336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
          new Table({
            name: "users_diseases",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "uuid_generate_v4()",
              },
              {
                name: "disease_id",
                type: "uuid",
              },
              {
                name: "user_id",
                type: "uuid",
              },
              {
                name: "latitude",
                type: "decimal",
              },
              {
                name: "longitude",
                type: "decimal",
              },
              {
                name: "created_at",
                type: "timestamp with time zone",
                default: "now()",
              },
            ],
            foreignKeys: [
              {
                name: "FKUser",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
              {
                name: "FKDisease",
                referencedTableName: "diseases",
                referencedColumnNames: ["id"],
                columnNames: ["disease_id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_diseases");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
      }

}
