const postService = require('../services/postService');

// POST
const getPosts = async (req, res) => {
  const response = await postService.getPosts();

  return res.status(200).send(response);
};

module.exports = {
  getPosts,
};  