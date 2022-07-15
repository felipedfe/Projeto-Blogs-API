const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.addUser);
router.get('/', validateJwt, userController.getUser);

module.exports = router;
