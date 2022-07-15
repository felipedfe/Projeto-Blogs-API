const express = require('express');
const validateJwt = require('../middlewares/validateJWT');

const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.addUser);

router.use(validateJwt);
router.get('/:id', userController.getUserById);
router.get('/', userController.getUser);

module.exports = router;
