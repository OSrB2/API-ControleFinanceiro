import db from '../../../infrastructure/database/index';
import { DataTypes } from 'sequelize';

export const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(300),
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
    tableName: 'user',
  }
);
