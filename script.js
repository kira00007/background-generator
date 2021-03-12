var css = document.querySelector("h3");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

console.log(button);

setGradient();
showGradient();

function setGradient() {
	body.style.background = 
		"linear-gradient(to right,"+c1.value+","+c2.value+")";

	setButtonBackground();

	showGradient();
}

function setButtonBackground() {
	button.style.background = 
		"linear-gradient(to right,"+c1.value+","+c2.value+")";
}

function showGradient() {
	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);

button.addEventListener("click", function() {
	setButtonBackground();
})