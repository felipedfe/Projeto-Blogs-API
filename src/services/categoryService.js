const { Category } = require('../database/models');

// GET
const getCategories = async () => {
  const response = Category.findAll();

  return response;
}

// POST
const addCategory = async (name) => {
  const response = await Category.create(name);

  return response;
};

module.exports = {
  addCategory,
  getCategories,
};
