module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
  cache: {
    duration: 20000,
  },
  ssl: process.env.SSL,
  extra: process.env.EXTRA,
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
