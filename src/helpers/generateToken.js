const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const generateToken = (data) => jwt.sign({ data }, secret, jwtConfig);

module.exports = {
  generateToken,
  secret,
};