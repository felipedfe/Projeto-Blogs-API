const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.use(validateJwt);

router.post('/', categoryController.addCategory);
router.get('/', categoryController.getCategories);

module.exports = router;
