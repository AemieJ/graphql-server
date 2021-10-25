const createUser = require("./createUser.service");
const createToken = require("./createToken.service");
const fetchUser = require("./fetchUser.service");
const updateUserOnLogin = require("./updateUserOnLogin.service");
const updateUser = require("./updateUser.service");

module.exports = {
    createUser,
    createToken,
    fetchUser,
    updateUser,
    updateUserOnLogin
};