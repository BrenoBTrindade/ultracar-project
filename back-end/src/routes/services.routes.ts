import { Router } from 'express';
import ServicesController from '../controller/services';

const ServicesRouter = Router();

ServicesRouter.get('/services/:employeeId', ServicesController.getALL);
ServicesRouter.post('/services', ServicesController.create);

export default ServicesRouter;
