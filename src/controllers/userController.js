const Joi = require('joi');
const userService = require('../services/userService');
const generateToken = require('../helpers/generateToken');

// POST
const addUser = async (req, res, next) => {
  const joiObj = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    image: Joi.required(),
  }).validate(req.body);

  if (joiObj.error) return next(joiObj.error);

  const data = req.body;
  const response = await userService.addUser(data);

  if (response.error) return next(response.error);

  const token = generateToken(data);

  return res.status(201).json({ token });
};

module.exports = {
  addUser,
};
