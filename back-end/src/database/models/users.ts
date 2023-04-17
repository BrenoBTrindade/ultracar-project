import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

class Users extends Model {
  id!: number;
  username!: string;
  role: string;

  static associate(models:any) {
    Users.hasMany(models.Services, { foreignKey: 'employeeId' });
    Users.hasMany(models.Services, { foreignKey: 'customerId' });
  }
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;
