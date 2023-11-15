const express = require('express')
const router = express.Router();
const {loginUser, registerUser} = require('../controller/authController') 

///Register new User
router.post('/register',registerUser)


////
router.post('/login',loginUser)


module.exports = router