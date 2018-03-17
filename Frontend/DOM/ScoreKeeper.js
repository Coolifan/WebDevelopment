var buttonP1 = document.querySelector("#p1");
var buttonP2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var h1 = document.querySelector("h1");
var rounds = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#playingTo");
var rst = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;
var playingTo = 5;
var gameOver = false;

buttonP1.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		if (p1Score === playingTo) {
			gameOver = true;
			// p1Display.style.color = "green";
			p1Display.classList.add("winner");
		}
	}
	p1Display.textContent = p1Score;
});

buttonP2.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === playingTo) {
			gameOver = true;
			// p2Display.style.color = "green";
			p2Display.classList.add("winner");
		}
	}
	p2Display.textContent = p2Score;
});

rst.addEventListener("click", function() {
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

rounds.addEventListener("change", function() {
	playingTo = Number(this.value);
	winningScoreDisplay.textContent = this.value;
	reset();
})
