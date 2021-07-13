module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  cache: {
    duration: 20000,
  },
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  logging: false,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/migrations/**/*.js'],
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
