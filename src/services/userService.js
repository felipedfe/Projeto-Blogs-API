const userModel = require('../models/userModel');
const { throwError } = require('../helpers');

const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const validateEmail = (email) => {
  if (!emailRegex.test(email)) {
    return throwError(
      'badRequest', '"email" must be a valid email',
    );
  }
  
  return {};
};

// GET
const getUser = async () => {
 const users = await userModel.getUser();
 return users;
};

const getUserById = async (id) => {
  const response = await userModel.getUserById(id);

  if (!response.user) {
    response.error = throwError('notFound', 'User does not exist');
    return response.error;
  }

  return response;
};

// POST
const addUser = async (user) => {
  const { email } = user;
  const validation = validateEmail(email);

  if (validation.error) return validation;

  const response = await userModel.addUser(user);

  if (response.user !== null) return throwError('alreadyExists', 'User already registered');

  return response;
};

module.exports = {
  addUser,
  getUser,
  getUserById,
};
