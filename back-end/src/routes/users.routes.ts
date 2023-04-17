import { Router } from 'express';
import UserController from '../controller/users';

const userRouter = Router();

userRouter.post('/register', UserController.create);
userRouter.get('/users', UserController.getALL);
userRouter.get('/customer', UserController.getCustomer);
userRouter.post('/login', UserController.employeeLogin);

export default userRouter;
