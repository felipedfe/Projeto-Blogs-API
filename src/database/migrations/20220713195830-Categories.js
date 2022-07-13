'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoriesTable = queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return CategoriesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Categories"),
};
