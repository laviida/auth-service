const express = require('express');
const router = express.Router();
const controller = require(`../controllers/authController`);
const middlewares = require(`../middlewares/middlewares`);

router.post('/login', [middlewares.login], controller.login);

router.post('/register', [middlewares.register], controller.register);

module.exports = router;