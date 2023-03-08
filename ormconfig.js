module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'myusername',
  password: 'mypassword',
  database: 'mydatabase',
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations'
  }
};