const jwt = require('jsonwebtoken');
const { secret } = require('../helpers/generateToken');
const { User } = require('../database/models');
const throwError = require('../helpers');

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({ where: { email: decoded.data.email } });

    if (!user) {
      const error = throwError('unauthorized', 'Expired or invalid token');
      return next(error);
    }

    req.user = user;

    next();
  } catch (error) {
    error.message = 'Expired or invalid token';

    return res.status(401).json({ message: error.message });
  }
};

module.exports = validateJwt;