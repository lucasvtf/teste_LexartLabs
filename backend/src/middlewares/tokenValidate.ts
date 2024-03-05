import { NextFunction, Request, Response } from 'express';
import ApiErrors from '../utils/apiErros';
import JwtToken from '../utils/jwtUtils';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

const tokenValidate = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new ApiErrors(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED);
  }

  try {
    JwtToken.verify(authorization);
  } catch (error) {
    throw new ApiErrors(ReasonPhrases.UNAUTHORIZED, StatusCodes.UNAUTHORIZED);
  }

  next();
};

export default tokenValidate;
