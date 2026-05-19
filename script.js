let score = 0;

const scoreText = document.getElementById("score");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  score++;
  scoreText.textContent = score;
});
