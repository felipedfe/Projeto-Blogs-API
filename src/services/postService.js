const { BlogPost, Category, User, PostCategory } = require('../database/models');
const { throwError } = require('../helpers/index');

const validateCategories = async (ids) => {
  const promises = [];
  ids.map((id) => promises.push(Category.findOne({ 
    where: { id },
    raw: true,
  })));

  const findCategory = await Promise.all(promises);
  return findCategory;
};

// GET
const getPosts = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return response;
};

const getPostById = async (id) => {
  const response = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!response) return throwError('notFound', 'Post does not exist');

  return response;
};

// POST
const addPost = async (blogPost) => {
  const promises = [];
  const { title, content, userId, categoryIds } = blogPost;

  const validation = await validateCategories(categoryIds);
  if (validation.includes(null)) return throwError('badRequest', '"categoryIds" not found'); 

  const postInfo = await BlogPost.create({ 
    title, content, userId, published: new Date(), updated: new Date(), 
  });
  const { id: postId } = postInfo;
  
  categoryIds.map((categoryId) => promises.push(PostCategory.create({ postId, categoryId })));
  await Promise.all(promises);

  return postInfo;
};

// PUT
const editPost = async (userId, postId, edit) => {
  let post = await getPostById(postId);
  post = post.toJSON();

  if (post.user.id !== userId) return throwError('unauthorized', 'Unauthorized user');

  const { title, content } = edit;
  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
    );

  const editedPost = await getPostById(postId);

  return editedPost;
};

module.exports = {
  getPosts,
  addPost,
  getPostById,
  editPost,
};