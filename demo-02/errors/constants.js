exports.errorName = {
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
    USER_NOT_EXISTS: 'USER_NOT_EXISTS',
    USER_INCORRECT_PASS: 'USER_INCORRECT_PASS',
    INVALID_TOKEN: 'INVALID_TOKEN',
    NOT_LOGGED_IN: 'NOT_LOGGED_IN',
    REFRESH_EXPIRED: 'REFRESH_EXPIRED',
    SERVER_ERROR: 'SERVER_ERROR'
}

exports.errorType = {
    VALIDATION_ERROR: {
        message: 'User information is not valid',
        statusCode: 401
    },
    USER_ALREADY_EXISTS: {
        message: 'User already exists. Login with the credentials',
        statusCode: 403
    },
    USER_NOT_EXISTS: {
        message: 'Invalid Email',
        statusCode: 403
    },
    USER_INCORRECT_PASS: {
        message: 'Incorrect password',
        statusCode: 403
    },
    INVALID_DENIED: {
        message: 'Invalid token',
        statusCode: 403
    },
    REFRESH_EXPIRED: {
        message: 'Refresh token is expired. User must re-login',
        statusCode: 403
    },
    NOT_LOGGED_IN: {
        message: 'User not logged in. Login with your credentials', 
        statusCode: 403
    },
    SERVER_ERROR: {
        message: 'Server error.',
        statusCode: 500
    }
}