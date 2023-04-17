import Parts from '../database/models/parts';

export default class PartsServices {
  static getAll = async () => {
    const allParts = await Parts.findAll();
    return { code: 200, data: allParts };
  };
}
