const { register, login } = require("./auth.controller");
const { update } = require("./profile.controller");

module.exports = {
    register,
    login,
    update
};