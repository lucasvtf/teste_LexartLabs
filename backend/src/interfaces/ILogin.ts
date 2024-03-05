export default interface ILogin {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

export interface ILoginToken {
  token: string;
}
