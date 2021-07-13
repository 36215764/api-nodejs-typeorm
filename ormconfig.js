module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  cache: {
    duration: 20000,
  },
  ssl: process.env.SSL_SUPORT,
  extra: { ssl: process.env.SSL_PG },
  logging: false,
  entities: [process.env.ENTITIES],
  migrations: [process.env.MIGRATIONS],
  cli: {
    migrationsDir: 'src/migrations/',
    entitiesDir: 'src/models',
  },
};
// cache: {
//   type: "redis",
//   options: {
//     host: "localhost",
//     port: 6379
//   }
// },
