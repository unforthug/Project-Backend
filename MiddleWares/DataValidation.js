const {body} = require('express-validator')

exports.DataValidation = [
    body ('email', "Please enter a valid Email").isEmail(),
    body('password', "Password should be at least 5 characters").isLength({min : 5})
]