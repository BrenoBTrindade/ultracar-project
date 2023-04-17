import { Request, Response } from 'express';
import PartsServices from '../services/parts';

export default class PartsController {
  static getALL = async (req: Request, res: Response) => {
    const { code, data } = await PartsServices.getAll();
    res.status(code).json({ data });
  };
}
