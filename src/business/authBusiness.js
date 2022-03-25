const authService = require(`../services/authService`);
const authDatabase = require(`../database/auth/authDatabase`);

exports.login = async (email, password) => {
    const user = await authDatabase.getByEmail(email);
    if (!user) throw new Error("Wrong Email");
    if (!authService.compare(password, user.password)) throw new Error("Wrong Password");
    return authService.sign(user.name, user._id);

}

exports.register = async (name, surname, email, password) => {
    const user = await authDatabase.createUser(name, surname, email, authService.hash(password));
    return authService.sign(name, user._id);
}

