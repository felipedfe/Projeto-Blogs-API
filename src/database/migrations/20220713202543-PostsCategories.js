'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategoriesTable = queryInterface.createTable("PostCategories", {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });

    return PostCategoriesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("PostCategories"),
};
