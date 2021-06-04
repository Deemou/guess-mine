const timer = document.querySelector(".timer");

let controlsTimerInterval = null;
let time = 30;

export const startTimer = () => {
  time = 30;
  timer.innerText = time;
  if (!controlsTimerInterval) {
    controlsTimerInterval = setInterval(() => {
      time -= 1;
      timer.innerText = time;
      console.log(time);
    }, 1000);
  }
};

export const endTimer = () => {
  clearInterval(controlsTimerInterval);
  timer.innerText = 0;
  controlsTimerInterval = null;
  console.log(controlsTimerInterval);
};
