const startBtn = document.querySelector(".start");
const stoptBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector("h2");

const minute = 25;
const seconds = 60;

let totalTime = minute * seconds;

function timeRemaining() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;

  display.textContent = `${minutes}:${seconds}`;

  //zaman dolduysa
  if (totalTime == 0) {
    clearTimeout(resetTime);
    display.textContent("Zaman Doldu!");
  }
}

const resetTime = setInterval(() => {
  totalTime--;
  timeRemaining();
}, 1000);
