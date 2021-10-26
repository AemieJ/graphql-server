const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const expressGraphQL = require('express-graphql').graphqlHTTP
const { userSchema } = require("./schema/index");
const { register, 
    login, 
    update, 
    forgotPassword,
    isValidPassURL,
    resetPassword } = require("./resolvers/index");
const getErrorCode = require("./errors/getCode");

const app = express();
const PORT = 4000 || process.env.PORT;
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Connected to mongodb"));

const root = {
    registerUser: register,
    loginUser: login,
    updateUserInfo: update,
    forgotPass: forgotPassword,
    isCorrectResetURL: isValidPassURL,
    resetPass: resetPassword
}

app.use('/graphql', expressGraphQL({
    schema: userSchema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (err) => ({
        message: getErrorCode(err.message)
    })
}))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));