const Joi = require("@hapi/joi");

const updateValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(100).required()
    });
    return schema.validate(data);
};

module.exports = {
    updateValidation
};

