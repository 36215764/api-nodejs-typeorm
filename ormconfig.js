module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: false,
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
