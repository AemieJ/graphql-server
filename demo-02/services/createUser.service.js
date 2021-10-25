require("dotenv").config();
const bcrypt = require("bcrypt");
const { errorName } = require("../errors/constants");

const { User } = require("../models/index");
const { registerValidation } = require("../validations/index");

const createUser = async (req) => {
    const { name, email, password } = req;

    let { error } = registerValidation(req);
    if (error) throw new Error(errorName.VALIDATION_ERROR);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
        name, email, password: hashedPassword
    });

    const checkUserExists = await User.findOne({ email });
    if (checkUserExists) throw new Error(errorName.USER_ALREADY_EXISTS);
    try {
        await user.save();
        return {
            status: 201, 
            msg: {
                id: user._id,
                name: user.name,
                email: user.email
            }};
    } catch(err) {
        throw new Error(errorName.SERVER_ERROR);
    }
}

module.exports = createUser;