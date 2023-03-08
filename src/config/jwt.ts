import { env } from "./env";

export const jwtConfig = {
  secret: env.jwtinfo.secret,
  expiresIn: env.jwtinfo.expirationTime,
};