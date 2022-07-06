score = 0;
smartScore = 0;
input = "";

var opponent_name = [
	"Piro",
	"Hanzo",
	"Thompson",
	"Tayir",
	"Vasana",
	"Ha-yoon",
	"Boris",
	"Grim",
	"Gudrun",
	"Mei Fang",
	"Sigrid",
	"Ursa",
	"Azai",
	"Pierre Le Bēlier",
	"Tōmōr",
	"Coatl",
	"Treadwell",
	"Kadira",
	"Okoyo"
];

function preload() {

}

function setup() {
	canvas = createCanvas(1000,700);
	canvas.parent('canvas');
	canvas.background("white");
}

function draw() {
	fill("red");
	stroke("pink");
	rect(10, 300, 10, 100);

	fill("green");
	stroke("lime");
	rect(980, 300, 10, 100);

	start_game();
}

function changeName() {
	input = document.getElementById("name").value;
	if (input != "") {
	document.getElementById("user").innerHTML = input + ": " + score;
	document.getElementById("confirm").style = "visibility:hidden";
	document.getElementById("name").style = "visibility:hidden";
	document.getElementById("status").innerHTML = "Status: Waiting for opponent to insert username...";

	setTimeout(function() {
	document.getElementById("start").style = "visibility:visible";
	document.getElementById("computer").innerHTML = opponent_name[Math.floor(Math.random() * 18)] + ": " + smartScore;
	document.getElementById("status").innerHTML = "Status: None";
	}, 3500);
  }
  else {
	document.getElementById("status").innerHTML = "Status: Warning! You cannot put an empty username.";
	setTimeout(function() {
		document.getElementById("status").innerHTML = "Status: None";
	}, 5000);
  }
}

function start_game() {

}


