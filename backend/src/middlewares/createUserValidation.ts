import e, { NextFunction, Request, Response } from 'express';
import ApiErrors from '../utils/apiErros';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const createUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const PASSWORD_lENGTH = 6;

  if (!name || !email || !password)
    throw new ApiErrors(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);

  if (!emailRegex.test(email) || password.length < PASSWORD_lENGTH)
    throw new ApiErrors(ReasonPhrases.BAD_REQUEST, StatusCodes.BAD_REQUEST);

  next();
};

export default createUserValidation;
