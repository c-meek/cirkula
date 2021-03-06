var x = document.getElementById("demo");


function Point(lat, lon) {
	this.lat = lat;
	this.lon = lon;
}

// takes seven Point objects
function Route(one, two, three, four, five, six, seven, eight) {
	this.one = one;
	this.two = two;
	this.three = three;
	this.four = four;
	this.five = five;
	this.six = six;
	this.seven = seven;
	this.eight = eight;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(calculatePoints);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function calculatePoints(position) {
	var userInput = document.getElementById('textBox').value;
	radius = calculateRadius(userInput/65);
	var one = new Point(position.coords.latitude, position.coords.longitude);
	var two = new Point(one.lat + 0.08*radius, one.lon + 0.38*radius);
	var three = new Point(one.lat + radius, one.lon + radius);
	var four = new Point(one.lat + 1.92*radius, one.lon + 0.38*radius);
	var five = new Point(one.lat + 2*radius, one.lon);
	var six = new Point(one.lat + 1.92*radius, one.lon - 0.38*radius);
	var seven = new Point(one.lat + radius, one.lon - radius);
	var eight = new Point(one.lat + 0.08*radius, one.lon - 0.38*radius);
	var link = composeLink(new Route(one, two, three, four, five, six, seven, eight));
    x.innerHTML = "<a href=" + link + ">Start Trip</a>";	
}



function composeLink(route) {
	var link = "http://www.google.com/maps/dir/";
	link = link + route.one.lat + "," + route.one.lon + "/";
	link = link + + route.two.lat + "," + route.two.lon + "/";
	link = link + + route.three.lat + "," + route.three.lon + "/";
	link = link + + route.four.lat + "," + route.four.lon + "/";
	link = link + + route.five.lat + "," + route.five.lon + "/";
	link = link + + route.six.lat + "," + route.six.lon + "/";
	link = link + + route.seven.lat + "," + route.seven.lon + "/";
	link = link + + route.eight.lat + "," + route.eight.lon + "/";
	llink = link + + route.one.lat + "," + route.one.lon;
	return link;
}

function calculateRadius(circumference) {
	var twoPi = 2.00 * 3.14;
	return circumference/twoPi;
}