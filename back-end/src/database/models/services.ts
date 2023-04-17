import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';
import Users from './users';

class Services extends Model {
  id!: number;
  carModel!: string;
  employeeId!: number;
  customerId!: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

Services.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  carModel: {
    type: STRING,
    allowNull: false,
  },
  employeeId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  customerId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  description: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'services',
  timestamps: true,
});

Services.belongsTo(Users, { foreignKey: 'customerId', as: 'customer' });
Services.belongsTo(Users, { foreignKey: 'employeeId', as: 'employee' });

Users.hasMany(Services, { foreignKey: 'customerId' });
Users.hasMany(Services, { foreignKey: 'employeeId' });
export default Services;
