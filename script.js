/* ===== DATE & TIME (INDIA) ===== */
function startClock() {
  setInterval(() => {
    const now = new Date();

    document.getElementById("date").innerText =
      now.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

    document.getElementById("time").innerText =
      now.toLocaleTimeString("en-IN");
  }, 1000);
}

/* ===== COIN TOSS ===== */
let flipping = false;

function flipCoin() {
  if (flipping) return;
  flipping = true;

  const coin = document.getElementById("coin");
  const resultText = document.getElementById("tossResult");

  const result = Math.random() < 0.5 ? "HEADS" : "TAILS";
  const spins = Math.random() < 0.5 ? 1080 : 1440;

  coin.style.transform =
    "rotateY(" + (spins + (result === "TAILS" ? 180 : 0)) + "deg)";

  setTimeout(() => {
    resultText.innerText = "Result: " + result;
    flipping = false;
  }, 1800);
}

/* ===== STOPWATCH WITH ANIMATION + MILLISECONDS ===== */
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatchTimer = null;

function startWatch() {
  if (stopwatchTimer) return;

  const display = document.getElementById("stopwatch");
  const wrapper = document.querySelector(".stopwatch-wrapper");

  wrapper.classList.add("running");

  stopwatchTimer = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    display.innerHTML =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0") + ":" +
      "<span class='ms'>" +
      String(milliseconds / 10).padStart(2, "0") +
      "</span>";

  }, 10);
}

function stopWatch() {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
  document.querySelector(".stopwatch-wrapper").classList.remove("running");
}

function resetWatch() {
  stopWatch();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
}
