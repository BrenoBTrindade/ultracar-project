import Users from '../database/models/users';
import Services from '../database/models/services';
import { UserBody } from '../types/service.type';

export default class UserService {
  static create = async (
    body: UserBody,
  ) => {
    if (!body) {
      return { code: 400, message: 'missing inputs' };
    }
    const user = await Users.findOne({ where: { username: body.username, role: 'customer' } });
    if (!user) return { code: 401, message: 'User not exist' };
    await Services.create({
      username: user.username,
      carModel: body.carModel,
      employeeId: body.employeeId,
      customerId: user.id,
      description: body.description,
      totalPrice: body.totalPrice,
    });
    return { code: 201, message: 'created' };
  };

  static getAll = async (employeeId:string) => {
    const allServices = await Services.findAll({ where: { employeeId },
      include: [
        { model: Users, as: 'customer', attributes: ['username'] },
      ] });
    return { code: 200, allServices };
  };
}
