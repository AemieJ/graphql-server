const { registerValidation, loginValidation } = require("./auth.validation");
const { updateValidation } = require("./profile.validation");

module.exports = {
    registerValidation,
    loginValidation,
    updateValidation
};