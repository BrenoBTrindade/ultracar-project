import Users from '../database/models/users';

export default class UserService {
  static getAll = async () => {
    const allUsers = await Users.findAll();
    return { code: 200, data: allUsers };
  };
}
