const Joi = require('joi');
const userService = require('../services/userService');
const { generateToken } = require('../helpers/token');

// GET
const getUser = async (_req, res) => {
  const users = await userService.getUser();

  res.status(200).json(users);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  const response = await userService.getUserById(id);

  if (response.error) return next(response.error);

  const { user } = response;
  return res.status(200).json(user);
};

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
  getUser,
  getUserById,
};
