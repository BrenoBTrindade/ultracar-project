import { Request, Response } from 'express';
import Services from '../services/services';

export default class ServicesController {
  static create = async (req: Request, res: Response) => {
    const { code, message } = await Services.create(req.body);
    res.status(code).json({ message });
  };

  static getALL = async (req: Request, res: Response) => {
    const { employeeId } = req.params;
    const { code, allServices } = await Services.getAll(employeeId);
    res.status(code).json({ allServices });
  };
}
