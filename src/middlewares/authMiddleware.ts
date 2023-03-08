import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { env } from '../config/env';

interface TokenPayload {
  id: number;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    const data = jwt.verify(token, env.jwtinfo.secret as Secret);
    const { id } = data as TokenPayload;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
}