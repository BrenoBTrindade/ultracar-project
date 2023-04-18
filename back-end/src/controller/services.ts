import { Request, Response } from 'express';
import Services from '../services/services';

export default class ServicesController {
  static getALL = async (req: Request, res: Response) => {
    const { employeeId } = req.params;
    const { code, allServices } = await Services.getAll(employeeId);
    res.status(code).json({ allServices });
  };
}
