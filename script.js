/* DATE & TIME (INDIA) */
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

/* COIN TOSS */
let flipping = false;

function flipCoin() {
  if (flipping) return;
  flipping = true;

  const coin = document.getElementById("coin");
  const resultText = document.getElementById("tossResult");

  const result = Math.random() < 0.5 ? "HEADS" : "TAILS";
  const spins = Math.random() < 0.5 ? 1080 : 1440; // 3–4 rotations

  coin.style.transform =
    "rotateY(" + (spins + (result === "TAILS" ? 180 : 0)) + "deg)";

  setTimeout(() => {
    resultText.innerText = "Result: " + result;
    flipping = false;
  }, 1800);
}

/* STOPWATCH */
let seconds = 0;
let timer = null;

function startWatch() {
  if (timer) return;

  timer = setInterval(() => {
    seconds++;
    document.getElementById("stopwatch").innerText =
      String(Math.floor(seconds / 60)).padStart(2, "0") + ":" +
      String(seconds % 60).padStart(2, "0");
  }, 1000);
}

function stopWatch() {
  clearInterval(timer);
  timer = null;
}

function resetWatch() {
  stopWatch();
  seconds = 0;
  document.getElementById("stopwatch").innerText = "00:00";
}
