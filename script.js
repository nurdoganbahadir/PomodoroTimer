const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
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
  if (totalTime <= 0) {
    clearInterval(interval);
    display.textContent = "Zaman Doldu!";
  }
}

function startTimer() {
  interval = setInterval(() => {
    timeRemaining();
    totalTime--;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  totalTime = 1500;
  timeRemaining();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
