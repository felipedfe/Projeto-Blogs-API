const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

// POST
const login = async (req, res, next) => {
  const data = await loginService.login(req.body);

  if (data.error) return next(data.error);

  // Gerando token
  const token = jwt.sign({ data }, secret, jwtConfig);

  console.log('-=-=->', data);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};