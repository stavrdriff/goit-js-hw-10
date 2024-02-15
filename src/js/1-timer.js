'use strict';

import flatpickr from "flatpickr";
import iziToast from "izitoast";

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return initTimer({ days, hours, minutes, seconds });
}

const initTimer = ({days, hours, minutes, seconds}) => {
  const daysTarget = document.querySelector('[data-days]');
  const hoursTarget = document.querySelector('[data-hours]');
  const minutesTarget = document.querySelector('[data-minutes]');
  const secondsTarget = document.querySelector('[data-seconds]');

  daysTarget.textContent = days;
  hoursTarget.textContent = hours;
  minutesTarget.textContent = minutes;
  secondsTarget.textContent = seconds;
}

const errorMessage = () => {
  iziToast.error({
    class: 'error-message',
    theme: 'dark',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    color: '#fff',
    icon: 'icon-x-octagon',
    iconColor: '#fff',
    position: 'topRight',
    pauseOnHover: true,
    timeout: 5000,
    message: 'Please choose a date in the future'
  });
}

const timerHandler = (selectedDate, input, trigger) => {
  trigger.removeAttribute('disabled');
  input.removeAttribute('disabled');
  let intervalID;

  trigger.addEventListener('click', () => {
    if (!intervalID) {
      trigger.setAttribute('disabled', '');
      input.setAttribute('disabled', '');

      intervalID = setInterval(() => {
        convertMs(selectedDate - Date.now());
      }, 1000)
    }
    else {
      clearInterval(intervalID);
      intervalID = null;
    }
  });
}

const initInputTimer = () => {
  const input = document.querySelector('#datetime-picker');
  const trigger = document.querySelector('[data-start]');
  let userSelectedDate;

  if (!input || !trigger) {
    return;
  }

  trigger.setAttribute('disabled', '');

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    dateFormat: 'Y-m-d h:m',
    onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (userSelectedDate <= Date.now()) {
        trigger.setAttribute('disabled', '');
        errorMessage();
      } else {
        timerHandler(userSelectedDate, input, trigger);
      }
    }
  };

  flatpickr(input, options);
}

initInputTimer();