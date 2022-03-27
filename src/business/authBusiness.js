const authService = require(`../services/authService`);
const authDatabase = require(`../database/auth/authDatabase`);
const { HTTP_STATUS_CODES } = require("../constants/constants");

exports.login = async (email, password) => {
    const user = await authDatabase.getByEmail(email);
    if (!user) {
        const error = new Error("Wrong Email");
        error.status = HTTP_STATUS_CODES.FORBIDDEN;
        throw error
    }
    if (!authService.compare(password, user.password)) {
        const error = new Error("Wrong Password")
        error.status = HTTP_STATUS_CODES.FORBIDDEN;
        throw error
    }
    return authService.sign(user);

}

exports.register = async (name, surname, email, password) => {
    const user = await authDatabase.createUser(name, surname, email, authService.hash(password));
    return authService.sign(user);
}

// data: any;
// message?: string;
// error: boolean;
// stack?: string;