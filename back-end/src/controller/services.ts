import { Request, Response } from 'express';
import Services from '../services/services';

export default class ServicesController {
  static getALL = async (req: Request, res: Response) => {
    const { code, data } = await Services.getAll();
    res.status(code).json({ data });
  };
}
