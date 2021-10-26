const { register, login } = require("./auth.controller");
const { update, forgotPassword, isValidPassURL, resetPassword } = require("./profile.controller");

module.exports = {
    register,
    login,
    update,
    forgotPassword,
    isValidPassURL,
    resetPassword
};