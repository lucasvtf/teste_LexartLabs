import model from '../database/models';
import { UserModel } from '../database/models/UserModel';
import ApiErrors from '../utils/apiErros';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import ILogin, { ILoginToken } from '../interfaces/ILogin';
import IServiceUser from '../interfaces/IServiceUser';

export default class UserService implements IServiceUser {
  private Model: typeof UserModel = model.users;

  async createUser(user: ILogin): Promise<ILogin> {
    const { name, password, email } = user;
    const existingUser = await this.Model.findOne({ where: { email } });

    if (existingUser)
      throw new ApiErrors(
        ReasonPhrases.UNPROCESSABLE_ENTITY,
        StatusCodes.UNPROCESSABLE_ENTITY
      );

    const newUser = await this.Model.create({ name, password, email });
    return newUser;
  }

  getUser(user: ILogin): Promise<ILoginToken> {
    throw new Error('Method not implemented.');
  }
}
