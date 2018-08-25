$(document).ready(function() {

// navigation bar

$("#nav-bar-wrapper").click(function() {
	$(".fa-times").toggle("slow");
	$(".about").toggle("slow");
	$(".home").toggle("slow");
	$(".projects").toggle("slow");
	if ($("#nav-bar-wrapper").find("i") ) {
		$(".fa-bars").toggle("slow");
	}
});

	$(".fa-linkedin-in").click(function(e) {
		e.stopPropagation();
	})
	$(".fa-github").click(function(e) {
		e.stopPropagation();
	})


// resize screen

	var canvas = document.getElementById('first-canvas');
	var ctx = canvas.getContext('2d');

initialize()

function initialize() {


	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();
}

function redraw() {
	ctx.strokeStyle = 'black';
	ctx.lineWidth = '5';
	ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}


function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	redraw();
}

// create stars

// ******RANDOMIZE RADIUS******** //

function starCreator(canvas, numberOne, numberTwo, numberThree, numberFour, radius) {
	x = Math.floor(Math.random() * numberOne) + numberTwo
	y = Math.floor(Math.random() * numberThree) + numberFour
	radius = radius
	color = ctx.fillStyle = "rgba(255, 255, 255, " + (Math.random() * 1) + 1 + ")";
    canvas.beginPath();
    canvas.shadowBlur = Math.floor((Math.random()*15)+5);
    ctx.shadowColor = 'white'
    canvas.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = color
    canvas.fill();
}


var amount = 0
var timerId = setInterval(function() {
	starCreator(ctx, 2200, 5, 1500, 5, 5);
	starCreator(ctx, 2200, 5, 1500, 5, 2.5);
	starCreator(ctx, 2200, 5, 1500, 5, 2);
	starCreator(ctx, 2200, 5, 1500, 5, 1.75);
	starCreator(ctx, 2200, 5, 1500, 5, 1.5);
	starCreator(ctx, 2200, 5, 1500, 5, 1.25);
	starCreator(ctx, 2200, 5, 1500, 5, 1);
	amount++
	if (amount === 1000) {
		clearInterval(timerId);
	}
}, 1 * 50)

// toggle arrow-right => arrow-down


$("#scroll-btn").mouseenter(function(e) {
	$(".fa-arrow-down").toggle("fast");
	if ($("#scroll-btn").find("i") ) {
		$(".fa-arrow-right").toggle("fast");
	}
})

$("#scroll-btn").mouseleave(function(e) {
	$(".fa-arrow-down").toggle("fast");
	if ($("#scroll-btn").find("i") ) {
		$(".fa-arrow-right").toggle("fast");
	}
})

// scroll down to about container

$("#scroll-btn").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".about-section").offset().top
	}, 500); return false;

});

// home button scrolls to top

$(".home").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $("#scroll-btn").offset().top
	}, 500); return false;
});

// about scroll to about button
$(".about").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".about-section").offset().top
	}, 500); return false;
});

// github api

const urls = [
	'https://api.github.com/users/TylerP33/repos?page=1',
	'https://api.github.com/users/TylerP33/repos?page=2',
	'https://api.github.com/users/TylerP33/repos?page=3',
	'https://api.github.com/users/TylerP33/repos?page=4',
	'https://api.github.com/users/TylerP33/repos?page=5',
	'https://api.github.com/users/TylerP33/repos?page=6',
	'https://api.github.com/users/TylerP33/repos?page=7',
	'https://api.github.com/users/TylerP33/repos?page=8',
	'https://api.github.com/users/TylerP33/repos?page=9',
	'https://api.github.com/users/TylerP33/repos?page=10',
	'https://api.github.com/users/TylerP33/repos?page=11',
	'https://api.github.com/users/TylerP33/repos?page=12'
]


function getLanguages() {
	return Promise.all(urls.map(url =>
		fetch(`${url}`)
		.then(response => response.json())
		.then(json => json.forEach(function(val) {
			var rubyCounter = 0
			var javaScriptCounter = 0
			var HTMLCounter = 0
			var CSSCounter = 0
			if (val.language === "CSS") {
				return console.log(CSSCounter++);
			} 
			
			})
		)
	))
}

getLanguages();





});
	




// step 1 - when we click the hamburger, we want "X" to appear
// step 2 - the menu should appear with X
// step 3 - when we close X, menu and text should go away
// step 4 - style menu, links, and make sure nav bar is responsive

//<h2 class="user-name">Hello, I'm Tyler Pulse.</h2>
// <h2 class="job-title">I'm a full-stack web developer.</h2>