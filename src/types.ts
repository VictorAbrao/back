import { Request } from 'express';

interface IRequestWithUser extends Request {
  userId?: number;
}

export { IRequestWithUser };