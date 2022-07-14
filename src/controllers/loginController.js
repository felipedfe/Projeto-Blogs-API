const loginService = require('../services/loginService');
const generateToken = require('../helpers/generateToken');

// POST
const login = async (req, res, next) => {
  const data = await loginService.login(req.body);

  if (data.error) return next(data.error);

  // Gerando token
  const token = generateToken(data);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};