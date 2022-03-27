const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { salt, tokenSecret } = require('../config/config');

exports.hash = (password) => bcrypt.hashSync(password, salt)

exports.compare = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);

exports.sign = (user) => jwt.sign({ name: user.name, sub: user._id, surname: user.surname, email: user.email }, tokenSecret);

exports.verify = (token) => jwt.verify(token, tokenSecret);

