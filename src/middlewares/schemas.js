const Joi = require('@hapi/joi');

exports.schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    surname: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

exports.schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

