import { STRING, INTEGER, DECIMAL, Model } from 'sequelize';
import db from '.';

class Parts extends Model {
  id!: number;
  name!: string;
  price: number;
}

Parts.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  price: {
    type: DECIMAL,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'parts',
  timestamps: false,
});

export default Parts;
