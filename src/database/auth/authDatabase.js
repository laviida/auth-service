const User = require("../../models/userModel");

exports.createUser = async (name, surname, email, password) => {
    const user = new User({ name, surname, email, password });
    await user.save();
    return user;
}

exports.getByEmail = async (email) => await User.findOne({ email }, { name: 1, _id: 1, password: 1 });





