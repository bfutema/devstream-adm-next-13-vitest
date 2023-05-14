import createUser from './create';
import deleteUser from './delete';
import listUser from './list';
import showUser from './show';
import updateUser from './update';

export default [
  ...createUser,
  ...listUser,
  ...updateUser,
  ...deleteUser,
  ...showUser,
];
