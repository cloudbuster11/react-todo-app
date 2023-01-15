const express = require('express');
const controller = require('../controller/LoginUserController');

const router = express.Router();

router.route('/').post(controller.loginUser);

module.exports = router;
