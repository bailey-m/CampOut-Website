const reservationBox = document.getElementById("reservation");
const permitBox	= document.getElementById("permit")
const waterPotableBox = document.getElementById("water-potable")
const waterNonPotableBox = document.getElementById("water-nonpotable")
const electricityBox = document.getElementById("electricity")
const cellServiceBox = document.getElementById("cell-service")
const bathroomPrimitiveBox = document.getElementById("bathroom-primitive")
const bathroomPlumbingBox = document.getElementById("bathroom-plumbing")
const foodPurchaseBox = document.getElementById("food-purchase")
let reservationBoxClicked = 0;
let permitBoxClicked = 0;
let waterPotableBoxClicked = 0;
let waterNonPotableBoxClicked = 0;
let cellServiceBoxClicked = 0;
let electricityBoxClicked = 0;
let bathroomPrimitiveBoxClicked = 0;
let bathroomPlumbingBoxClicked = 0;
let foodPurchaseBoxClicked = 0;
const reservationVal = campground.reservation;
const permitVal = campground.permit;
const waterPotableVal = campground.waterPotable;
const waterNonPotableVal = campground.waterNonPotable;
const electricityVal = campground.electricity;
const cellServiceVal = campground.cellService;
const bathroomPrimitiveVal = campground.bathroomPrimitive;
const bathroomPlumbingVal = campground.bathroomPlumbing;
const foodPurchaseVal = campground.foodPurchase;



console.log("resevation val=", reservationVal)
console.log("permit val=", permitVal)

reservationBox.addEventListener("change", () => {
	console.log("clicked res box")
	reservationBoxClicked += 1
	if (campground.reservation) {
		campground.reservation = false;
	} else {
		campground.reservation = true;
	}
	console.log(campground.reservation)
})

permitBox.addEventListener("change", () => {
	console.log("clicked permit box")
	permitBoxClicked += 1
	if (campground.permit) {
		campground.permit = false;
	} else {
		campground.permit = true;
	}
	console.log(campground.permit)
})

waterPotableBox.addEventListener("change", () => {
	console.log("clicked waterPotable")
	waterPotableBoxClicked += 1
	if (campground.waterPotable) {
		campground.waterPotable = false;
	} else {
		campground.waterPotable = true;
	}
	console.log(campground.waterPotable)
})

waterNonPotableBox.addEventListener("change", () => {
	console.log("clicked waterNonPotable")
	waterNonPotableBoxClicked += 1
	if (campground.waterNonPotable) {
		campground.waterNonPotable = false;
	} else {
		campground.waterNonPotable = true;
	}
	console.log(campground.waterNonPotable)
})

electricityBox.addEventListener("change", () => {
	console.log("clicked electricity")
	electricityBoxClicked += 1
	if (campground.electricity) {
		campground.electricity = false;
	} else {
		campground.electricity = true;
	}
	console.log(campground.electricity)
})

cellServiceBox.addEventListener("change", () => {
	console.log("clicked cellService")
	cellServiceBoxClicked += 1
	if (campground.cellService) {
		campground.cellService = false;
	} else {
		campground.cellService = true;
	}
	console.log(campground.cellService)
})

bathroomPrimitiveBox.addEventListener("change", () => {
	console.log("clicked bathroomPrimitive")
	bathroomPrimitiveBoxClicked += 1
	if (campground.bathroomPrimitive) {
		campground.bathroomPrimitive = false;
	} else {
		campground.bathroomPrimitive = true;
	}
	console.log(campground.bathroomPrimitive)
})

bathroomPlumbingBox.addEventListener("change", () => {
	console.log("clicked bathroomPlumbing")
	bathroomPlumbingBoxClicked += 1
	if (campground.bathroomPlumbing) {
		campground.bathroomPlumbing = false;
	} else {
		campground.bathroomPlumbing = true;
	}
	console.log(campground.bathroomPlumbing)
})

foodPurchaseBox.addEventListener("change", () => {
	console.log("clicked foodPurchase")
	foodPurchaseBoxClicked += 1
	if (campground.foodPurchase) {
		campground.foodPurchase = false;
	} else {
		campground.foodPurchase = true;
	}
	console.log(campground.foodPurchase)
})

if (reservationBoxClicked == 0) {
	campground.reservation = reservationVal
}

if (permitBoxClicked == 0) {
	campground.permit = permitVal
}

if (waterPotableBoxClicked == 0) {
	campground.waterPotable = waterPotableVal
}

if (waterNonPotableBoxClicked == 0) {
	campground.waterNonPotable = waterNonPotableVal
}

if (cellServiceBoxClicked == 0) {
	campground.cellService = cellServiceVal
}

if (electricityBoxClicked == 0) {
	campground.electicity = electricityVal
}

if (bathroomPrimitiveBoxClicked == 0) {
	campground.bathroomPrimitive = bathroomPrimitiveVal
}

if (bathroomPlumbingBoxClicked == 0) {
	campground.bathroomPlumbing = bathroomPlumbingVal
}

if (foodPurchaseBoxClicked == 0) {
	campground.foodPurchase = foodPurchaseVal
}