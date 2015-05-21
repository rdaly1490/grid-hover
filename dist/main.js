
var section = document.getElementById("main-section");

section.addEventListener("mouseover", colorIn)
section.addEventListener("mouseout", colorOut)

function colorIn(event) {
	event.target.style.backgroundColor = "green";
}

function colorOut(event) {
	event.target.style.backgroundColor = "#999";
}

