const Joi = require('joi');
const { number } = require('joi');

module.exports.campgroundSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        // image: Joi.string().required(),
        location: Joi.string().required(),
        description: Joi.string().required(),
		type: Joi.string().required(),
		permit: Joi.boolean(),
		permitInfo: Joi.string().allow(''),
		trailInfo: Joi.string().allow(''),
		reservation: Joi.boolean(),
		reservationInfo: Joi.string().allow(''),
		waterPotable: Joi.boolean(),
		waterNonPotable: Joi.boolean(),
		cellService: Joi.boolean(),
		electricity: Joi.boolean(),
		bathroomPrimitive: Joi.boolean(),
		bathroomPlumbing: Joi.boolean(),
		foodPurchase: Joi.boolean(),
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required()
    }).required()
})