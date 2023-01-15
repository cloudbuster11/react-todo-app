const express = require('express');
const controller = require('../controller/CreateUserController');

const router = express.Router();

router.route('/').post(controller.createUser);

module.exports = router;
