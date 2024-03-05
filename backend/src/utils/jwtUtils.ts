import * as jwt from 'jsonwebtoken';
import { IJWT } from '../interfaces/IJwt';

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

export default class JwtToken {
  static generate(payload: IJWT) {
    const token = jwt.sign(payload, TOKEN_SECRET, jwtConfig);
    return token;
  }

  static verify(token: string): IJWT {
    const result = jwt.verify(token, TOKEN_SECRET) as IJWT;
    return result;
  }
}
