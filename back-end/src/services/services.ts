import Services from '../database/models/services';

export default class UserService {
  static getAll = async () => {
    const allServices = await Services.findAll();
    return { code: 200, data: allServices };
  };
}
