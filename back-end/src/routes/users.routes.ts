import { Router } from 'express';
import UserController from '../controller/users';

const userRouter = Router();

userRouter.get('/users', UserController.getALL);

export default userRouter;
