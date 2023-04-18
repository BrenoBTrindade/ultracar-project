import { Request, Response } from 'express';
import UserService from '../services/users';

export default class UserController {
  static create = async (req: Request, res: Response) => {
    const { username, role } = req.body;
    const { code, message } = await UserService.create(username, role);
    res.status(code).json({ message });
  };

  static getALL = async (req: Request, res: Response) => {
    const { code, data } = await UserService.getAll();
    res.status(code).json({ data });
  };

  static getCustomer = async (req: Request, res: Response) => {
    const { username } = req.body;
    const { code, customer, message } = await UserService.getCustomer(username);
    if (message) return res.status(code).json({ message });
    res.status(code).json({ customer });
  };

  static employeeLogin = async (req: Request, res: Response) => {
    const { username } = req.body;
    const { code, token, employeeId } = await UserService.employeeLogin(username);
    res.status(code).json({ token, employeeId });
  };
}
