import { Response, Request, Router } from 'express';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';
import createUserValidation from '../middlewares/createUserValidation';

const userRoutes = Router();
const userService = new UserService();
const userController = new UserController(userService);

userRoutes.post('/login', createUserValidation, (req: Request, res: Response) =>
  userController.createUser(req, res)
);

export default userRoutes;
