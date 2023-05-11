import { DataSource } from "typeorm";
import { User } from "@/entities/user";

// initialize database

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "example",
  database: "example",
  entities: ["src/entities/*.ts"],
  logging: true,
  migrations: ["src/migrations/*.ts"],
});
