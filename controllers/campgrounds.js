const Campground = require('../models/campground');
const { cloudinary } = require("../cloudinary");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({accessToken: mapBoxToken})



module.exports.index = async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
}

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
}

module.exports.createCampground = async (req, res, next) => {
	const geoData = await geocoder.forwardGeocode({
		query: req.body.campground.location,
		limit: 1
	}).send()
	
    const campground = new Campground(req.body.campground);
	campground.geometry = geoData.body.features[0].geometry
    campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.author = req.user._id;
    await campground.save();
    console.log(campground);
    req.flash('success', 'Successfully made a new campground!');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.showCampground = async (req, res,) => {
    const campground = await Campground.findById(req.params.id).populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    }).populate('author');
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/show', { campground });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id)
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}

module.exports.updateCampground = async (req, res) => {
	const geoData = await geocoder.forwardGeocode({
		query: req.body.campground.location,
		limit: 1
	}).send()
	
    const { id } = req.params;
	//console.log("REQUEST BODY")
    //console.log(req.body);
	
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
	campground.geometry = geoData.body.features[0].geometry
	
	updateEditFormCheckboxes(req, campground)
	
	const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    campground.images.push(...imgs);
    await campground.save();
    if (req.body.deleteImages) {
        for (let filename of req.body.deleteImages) {
            await cloudinary.uploader.destroy(filename);
        }
        await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    }
	//console.log("CAMPGROUND OBJ")
	//console.log(campground)
    req.flash('success', 'Successfully updated campground!');
    res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteCampground = async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground')
    res.redirect('/campgrounds');
}

function updateEditFormCheckboxes(req, campground) {
	if (!req.body.campground.permit) {
		campground.permit = false;
	}
	if (!req.body.campground.reservation) {
		campground.reservation = false
	}
	
	if (!req.body.campground.waterPotable) {
		campground.waterPotable = false
	}
	
	if (!req.body.campground.waterNonPotable) {
		campground.waterNonPotable = false
	}
	
	if (!req.body.campground.cellService) {
		campground.cellService = false
	}
	
	if (!req.body.campground.electricity) {
		campground.electricity = false
	}
	
	if (!req.body.campground.bathroomPrimitive) {
		campground.bathroomPrimitive = false
	}
    
	if (!req.body.campground.bathroomPlumbing) {
		campground.bathroomPlumbing = false
	}
	
	if (!req.body.campground.foodPurchase) {
		campground.foodPurchase = false
	}
}