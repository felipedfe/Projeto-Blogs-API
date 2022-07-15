const { User } = require('../database/models');

// GET
const getUser = async () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserById = async (id) => {
  const response = {};
  response.user = await User.findOne({
    where: {id},
    attributes: { exclude: ['password'] }
  })

  return response;
};

// POST
const addUser = async (data) => {
  const { email } = data;
  
  const user = await User.findOne({
    where: { email },
    raw: true,
  });

  if (!user) User.create(data);

  return {user};
};

module.exports = {
  addUser,
  getUser,
  getUserById,
};
