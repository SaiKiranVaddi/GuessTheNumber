"use strict";

let score = 20;
let ranRun = Math.trunc(Math.random() * 20) + 1;
const btn = document.querySelector("#btn");
const resetBtn = document.querySelector("#reset");
let highScore = 0;

btn.addEventListener("click", () => {
  const guess = Number(document.querySelector("#guess").value);

  if (!guess) {
    document.querySelector("#message").textContent = "Enter A number";
  } else if (guess === ranRun) {
    document.querySelector("#message").textContent = "You Won 👏";
    document.querySelector("#secret-number").textContent = ranRun;
    if (highScore < score) {
      highScore = score;
      document.querySelector("#high-score").textContent = highScore;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector("#message").textContent =
        guess > ranRun ? "Too High " : "Too low";
      document.querySelector("#score").textContent = score;
    } else {
      score = 0;
      document.querySelector("#score").textContent = score;
      document.querySelector("#message").textContent = "You Lost";
    }
  }
  document.querySelector("#guess").value = "";
});

resetBtn.addEventListener("click", () => {
  ranRun = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#message").textContent = "Start guessing..";
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("#secret-number").textContent = ranRun;
});

//Testing push functonality
