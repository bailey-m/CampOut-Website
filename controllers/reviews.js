const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const {campgroundSchema, reviewSchema} = require('../models/schemas')
const Review = require('../models/review')
const ExpressError = require('../utils/ExpressError')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')

module.exports.createReview = async (req, res) => {
	const campground = await Campground.findById(req.params.id);
	const review = new Review(req.body.review)
	review.author = req.user._id;
	console.log(review)
	campground.reviews.push(review)
	await review.save()
	await campground.save()
	req.flash('success', 'Review posted!')
	res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteReview = async (req, res) => {
	const {id, reviewId} = req.params
	await Campground.findByIdAndUpdate(id, {$pull: {reviews: reviewId}})
	await Review.findByIdAndDelete(reviewId)
	req.flash('success', 'Review deleted!')
	res.redirect(`/campgrounds/${id}`)
}