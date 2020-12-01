const express = require('express')
const router = express.Router()
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const passport = require('passport')
const usersController = require('../controllers/users')

router.route('/register')
	.get(usersController.renderRegisterForm)
	.post(catchAsync(usersController.registerUser))

router.route('/login')
	.get(usersController.renderLoginForm)
	.post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), usersController.loginUser)

router.route('/logout')
	.get(usersController.logoutUser)

module.exports = router;