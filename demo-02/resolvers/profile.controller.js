const { updateUser } = require("../services/index");

const update = async ({ email, body, accessToken }) => {
    const value = await updateUser(email, body, accessToken);
    console.log(value.msg);
    return value.msg;
}

module.exports = {
    update
};