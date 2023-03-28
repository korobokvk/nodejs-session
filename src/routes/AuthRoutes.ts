import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import AuthService from '@src/services/AuthService';
import EnvVars from '@src/constants/EnvVars';
import { IReq, IRes } from './types/express/misc';



// **** Types **** //

interface ILoginReq {
  email: string;
  password: string;
}


interface ISignUpReq {
  email: string;
  password: string;
  name: string;
}

// **** Functions **** //

/**
 * Login a user.
 */
async function login(req: IReq<ILoginReq>, res: IRes) {
  const { email, password } = req.body;
  // Add jwt to cookie
  const jwt = await AuthService.getJwt(email, password);
  // Return
  return res.status(HttpStatusCodes.OK).send({token: jwt});
}

async function signUp(req: IReq<ISignUpReq>, res: IRes) {
  const { email, password, name } = req.body;
  // Add jwt to cookie
  const success = await AuthService.signUp(email, password, name);

  if(success) {
    return res.status(HttpStatusCodes.OK).send({message: 'User created successfully'});

  }
  return res.status(HttpStatusCodes.BAD_REQUEST).send({message: 'Failure'});

  // Return
}






// **** Export default **** //

export default {
  login,
  signUp
} as const;
