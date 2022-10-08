import db from '../../../infrastructure/database/index';
import { DataTypes } from 'sequelize';

export const Expenses = db.define(
  'expenses',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM(
        'Alimentação',
        'Saúde',
        'Moradia',
        'Transporte',
        'Educação',
        'Lazer',
        'Imprevistos',
        'Outras'
      ),
      allowNull: true,
      default: 'Outras',
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'expenses',
  }
);
