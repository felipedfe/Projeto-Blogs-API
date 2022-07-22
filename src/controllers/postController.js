const Joi = require('joi');
const postService = require('../services/postService');

// GET
const getPosts = async (req, res) => {
  const response = await postService.getPosts();

  return res.status(200).send(response);
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;

  const response = await postService.getPostById(id);

  if (response.error) return next(response.error);

  return res.status(200).json(response);
};

// POST
const addPost = async (req, res, next) => {
  const { id: userId } = req.user.dataValues;
  const post = req.body;

  const REQUIRED_FIELDS_ERROR = new Error('Some required fields are missing');
  const joiObj = Joi.object({
    title: Joi.string().required().error(REQUIRED_FIELDS_ERROR),
    content: Joi.string().required().error(REQUIRED_FIELDS_ERROR),
    categoryIds: Joi.required().error(new Error('"categoryIds" not found')),
  }).validate(req.body);

  if (joiObj.error) return next(joiObj.error);

  const blogPost = { ...post, userId };

  const response = await postService.addPost(blogPost);

  if (response.error) return next(response.error);

  return res.status(201).json(response);
};

module.exports = {
  getPosts,
  addPost,
  getPostById,
};  