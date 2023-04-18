import { Router } from 'express';
import ServicesController from '../controller/services';

const ServicesRouter = Router();

ServicesRouter.get('/services/:employeeId', ServicesController.getALL);

export default ServicesRouter;
