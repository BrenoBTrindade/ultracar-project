import { Router } from 'express';
import PartsController from '../controller/parts';

const PartsRouter = Router();

PartsRouter.get('/parts', PartsController.getALL);

export default PartsRouter;
