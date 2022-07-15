const { Category } = require('../database/models');

const addCategory = async (name) => {
  const response = await Category.create(name);

  return response;
};

module.exports = {
  addCategory,
};
