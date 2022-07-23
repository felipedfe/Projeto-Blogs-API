const Joi = require('joi');
const postService = require('../services/postService');
const { decodeToken } = require('../helpers/token');

const REQUIRED_FIELDS_ERROR = new Error('Some required fields are missing');

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

// PUT
const editPost = async (req, res, next) => {
  const { id: postId } = req.params;
  const edit = req.body;
  
  const joiObj = Joi.object({
    title: Joi.string().required().error(REQUIRED_FIELDS_ERROR),
    content: Joi.string().required().error(REQUIRED_FIELDS_ERROR),
  }).validate(edit);

  if (joiObj.error) return next(joiObj.error);

  const token = req.headers.authorization;
  // aqui pegamos o ID (como userId) do usuário logado
  const { data: { id: userId } } = decodeToken(token);
  
  const response = await postService.editPost(userId, postId, edit);

  if (response.error) return next(response.error);

  return res.status(200).json(response);
};

module.exports = {
  getPosts,
  addPost,
  getPostById,
  editPost,
};  