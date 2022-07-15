const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const postController = require('../controllers/postController');

router.use(validateJwt);
router.get('/', postController.getPosts);

module.exports = router;
