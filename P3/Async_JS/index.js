let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let count = 0;
let isStartActive = false;
let time;
start.addEventListener("click", () => {
  if (!isStartActive) {
    isStartActive = true
    time = setInterval(() => {
      count++;
      timer.innerText = count;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(time);
  isStartActive = false
});

reset.addEventListener("click", () => {
  clearInterval(time);
  count = 0;
  timer.innerText = count;
  isStartActive = false
});
