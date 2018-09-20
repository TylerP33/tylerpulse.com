$(document).ready(function() {

// navigation bar

$("#nav-bar-wrapper").click(function() {
	$(".fa-times").toggle("slow");
	$(".about").toggle("slow");
	$(".home").toggle("slow");
	$(".projects").toggle("slow");
	$(".contacts").toggle("slow");
	if ($("#nav-bar-wrapper").find("i") ) {
		$(".fa-bars").toggle("slow");
	}
});

// navbar is fixed at a certain scroll limit


(function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS


$(window).on("scroll", function() {
  aboutPage();
  projectPage();
});

function aboutPage() {
	var	hT = $("#about-container").offset().top,
		hH = $("#about-container").outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	if (wS > (hT+hH-wH)) {
		$(".nav-bar").slideDown(2000)
		$("#about-title-container").show("slide", { direction: "left" }, 1000);
		$(".flex-fa-icon-container").show("slide", { direction: "left" }, 1000);
		$(".my-img-container").show("slide", { direction: "left" }, 1000);
		$("#graph-legend-icon").show("slide", { direction: "left" }, 1000);
		$(".nav-bar").css("display", "flex")
		$(".nav-bar").css("position", "fixed")
		$(".nav-bar").css("border-bottom", "solid 4px #393939")
		$(".nav-bar").css("background-color", "#FF5A09")
		$(".nav-bar a").css("background-color", "#FF5A09")
		$(".nav-bar a").css("color", "#393939")
		$(".nav-bar i").css("color", "#393939")
		$(".flex-fa-icon-container i").animate({
			color: "#FF5A09",
			backgroundColor: "#393939",
			width: "90%",
		}, 3000)
	} else {
		$(".nav-bar").css("position", "relative")
	}
}

// project page

function projectPage() {
	var hT = $("#project-one").offset().top
		hH = $("#project-one").outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		console.log(wH)
	if (wS > (hT+hH-wH)) { 
		$(".nav-bar").css("background-color", "#393939")
		$(".nav-bar").css("border-bottom", "solid 4px #FF5A09")
		$(".nav-bar a").css("color", "#FF5A09")
		$(".nav-bar a").css("background-color", "#393939")
		$(".nav-bar i").css("color", "#FF5A09")
	}
}

function contactForm() {
	var hT = $(".contact-container").offset().top
		hH = $(".contact-container").outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
		console.log(wH)
	if (wS > (hT+hH-wH)) { 

	}
}




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
	if (amount === 500) {
		clearInterval(timerId);
	}
}, 1 * 50)

// toggle arrow-right => arrow-down


$("#button-container").mouseenter(function(e) {
	$(".fa-arrow-down").toggle("fast");
	if ($("#scroll-btn").find("i") ) {
		$(".fa-arrow-right").toggle("fast");
	}
})

$("#button-container").mouseleave(function(e) {
	$(".fa-arrow-down").toggle("fast");
	if ($("#scroll-btn").find("i") ) {
		$(".fa-arrow-right").toggle("fast");
	}
})

// scroll down to about container

$("#button-container").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".about-section").offset().top
	}, 500); return false;

});


// home button scrolls to top

$(".home").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".canvas").offset().top
	}, 500); return false;
});

// about scroll to about button
$(".about").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".about-section").offset().top
	}, 500); return false;
});

$(".projects").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".project-container").offset().top
	}, 500); return false;
});

$(".contacts").click(function(e) {
	$([document.documentElement, document.body]).animate({
		scrollTop: $(".contact-container").offset().top
	}, 500); return false;
});

// github api - Promise.All for all repos

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
  let counter = {}

  return Promise.all(urls.map(url =>
      fetch(`${url}`)
      .then(response => response.json())
      .then(obj => obj.forEach(function(val) {
        if( val.language ) {
          counter[val.language] = counter[val.language] || 0
          counter[val.language]++
        }
      }))))
    .then(() => {
      const ruby = counter["Ruby"]
      const CSS = counter["CSS"]
      const HTML = counter["HTML"]
      const js = counter["JavaScript"]
      const total = ruby + CSS + HTML + js

      const rubyPercent = Math.round(ruby / total * 100)
      const cssPercent = Math.round(CSS / total * 100)
      const htmlPercent = Math.round(HTML / total * 100)
      const jsPercent = Math.round(js / total * 100)

      var graphCanvas = document.getElementById('graphCanvas')
      graphCanvas.width = 200;
      graphCanvas.height= 200;

      var ctx = graphCanvas.getContext("2d")

    function drawLine(ctx, startX, startY, endX, endY){
    	ctx.beginPath();
    	ctx.moveTo(startX,startY);
    	ctx.lineTo(endX,endY);
    	ctx.stroke();
	}

	function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    	ctx.beginPath();
    	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    	ctx.stroke();
	}

	function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    	ctx.fillStyle = color;
    	ctx.beginPath();
    	ctx.moveTo(centerX,centerY);
    	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    	ctx.closePath();
    	ctx.fill();
	}

	var languageData = {
		"Ruby": rubyPercent,
		"HTML": htmlPercent,
		"CSS": cssPercent,
		"JavaScript": jsPercent
	}
	var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }
 
        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
    }
}
	var myPiechart = new Piechart(
    	{
        	canvas:graphCanvas,
        	data:languageData,
        	colors:["#393939 ","#FF5A09", "#ec7f37","#be4f0c"]
    	}
	);
	myPiechart.draw();
	})
}

getLanguages();

// highlight intro words

$(".orange").css("color", "#FF5A09")

// project page


function uncoverProjectSlide(slide, project) {
	slide.mouseenter(function() {
		$(this).fadeOut(250)
	})

	project.mouseleave(function() {
		slide.fadeIn(250)
		slide.css("border", "solid 2px #FF5A09")
	})
}

uncoverProjectSlide($(".slide-one"), $("#project-one") )
uncoverProjectSlide($(".slide-two"), $("#project-two") )
uncoverProjectSlide($(".slide-three"), $("#project-three") )

// project pop-up div - donate

function modal(modal, btn, close){
	btn.click(function() {
    	modal.fadeIn(500)
	});

    close.click(function() {
    	modal.fadeOut(500)
	});

    $(window).click(function(event) {
    if (event.target == modal) {
        modal.css("display", "none");
    	}
	});
}


modal($("#cli_modal"), $("#cli_btn"), $(".cli_close"));
modal($("#sinatra_modal"), $("#sinatra_btn"), $(".sinatra_close"));
modal($("#donate_modal"), $("#donate_btn"), $(".close"));


});






	




// step 1 - when we click the hamburger, we want "X" to appear
// step 2 - the menu should appear with X
// step 3 - when we close X, menu and text should go away
// step 4 - style menu, links, and make sure nav bar is responsive

//<h2 class="user-name">Hello, I'm Tyler Pulse.</h2>
// <h2 class="job-title">I'm a full-stack web developer.</h2>