import Users from '../database/models/users';
import Services from '../database/models/services';

export default class UserService {
  static getAll = async (employeeId:string) => {
    const allServices = await Services.findAll({ where: { employeeId },
      include: [
        { model: Users, as: 'customer', attributes: ['username'] },
      ] });
    return { code: 200, allServices };
  };
}
