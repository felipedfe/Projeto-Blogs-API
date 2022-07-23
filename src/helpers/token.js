const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

const generateToken = (data) => jwt.sign({ data }, secret, jwtConfig);

const decodeToken = (token) => jwt.verify(token, secret);

module.exports = {
  generateToken,
  decodeToken,
  secret,
};