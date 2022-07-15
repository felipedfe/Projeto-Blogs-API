const { BlogPost, Category, User } = require('../database/models');

const getPosts = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return response;
};

module.exports = {
  getPosts,
};