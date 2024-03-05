import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import IServiceUser from '../interfaces/IServiceUser';

export default class UserController {
  private _service: IServiceUser;

  constructor(service: IServiceUser) {
    this._service = service;
  }

  async createUser(req: Request, res: Response) {
    const user = await this._service.createUser(req.body);
    if (user)
      return res.status(StatusCodes.CREATED).json(ReasonPhrases.CREATED);
  }
}
