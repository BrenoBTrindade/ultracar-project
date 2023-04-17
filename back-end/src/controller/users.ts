import { Request, Response } from 'express';
import UserService from '../services/users';

export default class UserController {
  static getALL = async (req: Request, res: Response) => {
    const { code, data } = await UserService.getAll();
    res.status(code).json({ data });
  };
}
