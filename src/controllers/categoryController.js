const Joi = require('joi');
const categoryService = require('../services/categoryService');

const addCategory = async (req, res, next) => {
  const name = req.body;

  const joiObj = Joi.object({
    name: Joi.required(),
  }).validate(req.body);

  if (joiObj.error) return next(joiObj.error);

  const response = await categoryService.addCategory(name);

  return res.status(201).json(response);
};

module.exports = {
  addCategory,
};
