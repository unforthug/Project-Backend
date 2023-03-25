const express = require('express')
const router = express.Router();
const {Register,Login,upUser} = require('../Controllers/UserController')
const {DataValidation} = require('../MiddleWares/DataValidation')


router.post('/signup',DataValidation, Register)
router.post('/signin', Login)
router.put('/profile', upUser)


module.exports = router;