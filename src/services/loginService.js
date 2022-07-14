const { throwError } = require('../helpers');
const loginModel = require('../models/loginModel');

const validateLogin = (loginData) => {
  if (!loginData.email || !loginData.password) {
    return throwError('badRequest', 'Some required fields are missing');
  }

  return {};
};

// POST
const login = async (payload) => {
  const validation = validateLogin(payload);
  
  if (validation.error) return validation;

  const user = await loginModel.login(payload);
 
  if (!user) return throwError('badRequest', 'Invalid fields');

  return user;
};

module.exports = {
  login,
};