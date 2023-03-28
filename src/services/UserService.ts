import UserRepo from '@src/repos/UserRepo';
import { IUser } from '@src/models/User';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';


// **** Functions **** //


/**
 * Add one user.
 */
function addOne(user: IUser): Promise<IUser | void> {
  return UserRepo.add(user);
}

function getOne(email: string | undefined): Promise<IUser | void> | void {
  if(email) {
    return UserRepo.getOne(email);
  }

  return undefined;
}





// **** Export default **** //

export default {
  addOne,
  getOne
} as const;
