const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const postController = require('../controllers/postController');

router.use(validateJwt);
router.get('/', postController.getPosts);
router.post('/', postController.addPost);

module.exports = router;
