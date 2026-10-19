const createUserValidationSchema = {
    user_name: {
        notEmpty: {
            errorMessage: 'user_name is required'
        },
        isString: {
            errorMessage: 'user_name must be in string format'
        }
    }
}

module.exports = { createUserValidationSchema }