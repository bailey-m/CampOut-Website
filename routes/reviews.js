const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync')
const Campground = require('../models/campground')
const {campgroundSchema, reviewSchema} = require('../models/schemas')
const Review = require('../models/review')
const ExpressError = require('../utils/ExpressError')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')
const reviewsController = require('../controllers/reviews')


router.post('/', isLoggedIn, validateReview, catchAsync(reviewsController.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewsController.deleteReview))

module.exports = router;