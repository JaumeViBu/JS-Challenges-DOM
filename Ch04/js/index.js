let remainingSeconds = 0;
let intervalId;

document
  .querySelector('.clock-container__btn--start')
  .addEventListener("click", startCountdown);

document
  .querySelector('.clock-container__btn--pause')
  .addEventListener("click", pauseCountdown);

document
  .querySelector('.clock-container__btn--clear')
  .addEventListener("click", restartCountdown);

/**
 * Puts remaining seconds at 0 and resets the values of the inputs in the view
 *
 */
function restartCountdown() {
  if (intervalId) clearInterval(intervalId);
  remainingSeconds = 0;
  document.querySelector('#seconds').value = 0;
  document.querySelector('#minutes').value = 0;
  document.querySelector('#hours').value = 0;
  document.querySelector('.clock-container__btn--start').disabled = false;
  document.querySelector('.clock-container__btn--pause').disabled = true;
  document.querySelector('.clock-container__btn--clear').disabled = false;
}

/**
 * Calc the remainingSeconds from the inputs given and start an interval to count them down
 *
 * 
 */
function startCountdown() {

  remainingSeconds = +document.querySelector('#seconds').value;
  remainingSeconds += +document.querySelector('#minutes').value * 60;
  remainingSeconds += +document.querySelector('#hours').value * 3600;

  if (remainingSeconds <= 0) return;//if it's already 0 don't need no interval...

  document.querySelector('.clock-container__btn--start').disabled = true;
  document.querySelector('.clock-container__btn--pause').disabled = false;


  intervalId = setInterval(() => {

    remainingSeconds -= 1;
    remainingSeconds = remainingSeconds < 0 ? 0 : remainingSeconds;

    const remHours = Math.floor(remainingSeconds / 3600);
    const remMinutes = Math.floor((remainingSeconds - remHours * 3600) / 60);
    const remSeconds = Math.floor((remainingSeconds - remHours * 3600 - remMinutes * 60));


    document.querySelector('#hours').value = remHours;
    document.querySelector('#minutes').value = remMinutes;
    document.querySelector('#seconds').value = remSeconds;

    if (remainingSeconds <= 0) {

      const audio = new Audio('./media/clock-beep.wav');
      audio.loop = false;
      audio.play();

      restartCountdown();
    }
  }, 1000);
}

/**
 * Pause the countdown by clearing the interval and restarting 
 * the status of start and pause buttons
 *
 */
function pauseCountdown() {

  clearInterval(intervalId);
  document.querySelector('.clock-container__btn--start').disabled = false;
  document.querySelector('.clock-container__btn--pause').disabled = true;
}






restartCountdown();