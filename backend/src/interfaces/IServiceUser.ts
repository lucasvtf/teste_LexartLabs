import ILogin, { ILoginToken } from './ILogin';

export default interface IServiceUser {
  createUser(user: ILogin): Promise<ILogin>;
  getUser(user: ILogin): Promise<ILoginToken>;
}
