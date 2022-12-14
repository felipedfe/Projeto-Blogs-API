const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const postController = require('../controllers/postController');

router.use(validateJwt);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.editPost);
router.get('/', postController.getPosts);
router.post('/', postController.addPost);

module.exports = router;
