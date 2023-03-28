import {Model} from 'sequelize';
import { UserModel } from '@src/models';
import { IUser } from '@src/models/User';


// **** Functions **** //

/**
 * Get one user.
 */
async function getOne(email: string): Promise<IUser | void> {
  const user: Model<IUser> | null = await UserModel.findOne({ where: {email}});
  const dataObject = user?.dataValues;
  return dataObject;
}

/**
 * Add one user.
 */
async function add(user: IUser): Promise<IUser | void> {
  const newUser = UserModel.build({...user});
  const useData: Model<IUser> | null = await newUser.save();
  return useData?.dataValues;
}





// **** Export default **** //

export default {
  getOne,
  add,
} as const;
