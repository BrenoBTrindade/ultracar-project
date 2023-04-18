import { createToken } from '../helpers/jwt';
import Users from '../database/models/users';

export default class UserService {
  static create = async (username: string, role: string) => {
    if (!username || !role) return { code: 400, message: 'missing name or role' };
    const user = await Users.findOne({ where: { username, role: 'customer' } });
    if (user) return { code: 401, message: 'User already exists' };
    await Users.create({ username, role });
    return { code: 201, message: 'created' };
  };

  static getAll = async () => {
    const allUsers = await Users.findAll();
    return { code: 200, data: allUsers };
  };

  static getCustomer = async (username: string) => {
    const customer = await Users.findOne({ where: { username, role: 'customer' } });
    if (!customer) return { code: 401, message: 'not Found' };
    return { code: 200, customer };
  };

  static employeeLogin = async (username: string) => {
    const employee = await Users.findOne({ where: { username, role: 'employee' } }) as Users;
    if (!employee) return { code: 401, message: 'not found' };

    const token = createToken(
      { id: employee.id, username: employee.username, role: employee.role },
    );
    return { code: 200, token, employeeId: employee.id };
  };
}
