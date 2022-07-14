const express = require('express');

const router = express.Router();
const loginRouter = require('../controllers/loginController');

router.post('/', loginRouter.login);

module.exports = router;