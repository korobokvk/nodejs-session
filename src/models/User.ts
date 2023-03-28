import { TAll } from 'jet-validator';
import { DataTypes, Sequelize } from 'sequelize';


// **** Variables **** //

export enum UserRoles {
  Standard,
  Admin,
}


// **** Types **** //

export interface IUser {
  id?: number;
  name: string;
  email: string;
  pwdHash?: string;
}

export interface ISessionUser {
  id: number;
  email: string;
  name: string;
}


// **** Functions **** //

/**
 * Get a new User object.
 */
function new_(
  name: string,
  email: string,
  role?: UserRoles,
  pwdHash?: string,
): IUser {
  return {
    id: -1,
    email,
    name,
    pwdHash: (pwdHash ?? ''),
  };
}

/**
 * Copy a user object.
 */
function copy(user: IUser): IUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    pwdHash: user.pwdHash,
  };
}

/**
 * See if an object is an instance of User.
 */
function instanceOf(arg: TAll): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'email' in arg &&
    'name' in arg &&
    'role' in arg
  );
}


const UserModel = (sequelize: Sequelize) => {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pwdHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })
}

// **** Export default **** //

export default {
  new: new_,
  copy,
  instanceOf,
  UserModel
} as const;
