import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config';

class AuthController {
  async login(req: Request, res: Response) {
    const { login, senha } = req.body;

    if (login !== env.login.userLogin || senha !== env.login.userPassword) {
      return res.status(401).json({ error: 'Invalid login or password' });
    }

    const token = jwt.sign({ login }, env.jwtinfo.secret, {
      expiresIn: env.jwtinfo.expirationTime,
    });

    return res.json({ token });
  }
}

export default new AuthController();