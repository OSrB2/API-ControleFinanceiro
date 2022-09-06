import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('user', {
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
        unique: true,
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
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('user');
  },
};
