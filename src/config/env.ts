export const env = {
  port: process.env.PORT || 3000,
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
  },
  jwtinfo: {
    secret: process.env.JWT_SECRET || "mysecretkey",
    expirationTime: parseInt(process.env.JWT_EXPIRATION_TIME || "3600", 10),
  },
  login: {
    userLogin: process.env.USER_LOGIN || "letscode",
    userPassword: process.env.USER_PASSWORD || "lets@123",
  },
};