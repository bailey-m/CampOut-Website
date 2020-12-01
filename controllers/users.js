const express = require('express')
const router = express.Router()
const User = require('../models/user')
const catchAsync = require('../utils/catchAsync')
const passport = require('passport')

module.exports.renderRegisterForm =  (req, res) => {
	res.render('users/register')
}

module.exports.registerUser = async (req, res) => {
	try {
		const { email, username, password } = req.body;
		const user = new User({ email, username })
		const registeredUser = await User.register(user, password)
		req.login(registeredUser, err => {
			if(err) return next(err);
			req.flash('success', 'Welcome to CampOut!')
			res.redirect('/campgrounds')
			})
		} catch(e) {
			req.flash('error', e.message)
			res.redirect('/register')
		}
}

module.exports.renderLoginForm = (req, res) => {
	res.render('users/login')
}

module.exports.loginUser = (req, res) => {
	req.flash('success', 'Welcome back!')
	const redirectUrl = req.session.returnTo || '/campgrounds'
	delete req.session.returnTo
	res.redirect(redirectUrl)
}

module.exports.logoutUser = (req, res) => {
	req.logout()
	req.flash('success', "Successfully logged you out. Come back soon!")
	res.redirect('/campgrounds')
}