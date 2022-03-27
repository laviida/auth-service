const authBusiness = require(`../business/authBusiness`);
const { response } = require(`../services/responseService`);
const { HTTP_STATUS_CODES } = require("../constants/constants");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authBusiness.login(email, password);
        res.json(response.success({ token }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}

exports.register = async (req, res) => {
    try {
        const { email, password, name, surname } = req.body;
        const token = await authBusiness.register(name, surname, email, password);
        res.json(response.success({ token }))
    } catch (error) {
        res.status(error.status ?? HTTP_STATUS_CODES.INTERNAL_SERVER).json(response.error(error.name, error.message, error.stack))
    }
}
