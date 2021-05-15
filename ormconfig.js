module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: process.env.NODE_ENV !== "development" ? ["dist/models/**.js"] : ["src/models/**.ts"],
  migrations: process.env.NODE_ENV !== "development" ? ["dist/database/migrations/*.js"] : ["src/database/migrations/*.ts"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  ssl: process.env.NODE_ENV !== "development" && true,
  extra: process.env.NODE_ENV !== "development" && {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
