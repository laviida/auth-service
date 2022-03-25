const schemas = require("./schemas")


exports.register = (req, res, next) => {
    const { error } = schemas.schemaRegister.validate(req.body);
    if (error) return res.status(403).json({ error: error.details[0].message });
    else next();
}

exports.login = (req, res, next) => {
    const { error } = schemas.schemaLogin.validate(req.body);
    if (error) return res.status(403).json({ error: error.details[0].message });
    else next();
}