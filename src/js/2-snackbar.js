'use strict';

import iziToast from "izitoast";

const popupHandler = (delay, state) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve();
      } else {
        reject();
      }
    }, delay);
  });

  promise
    .then(() => {
      iziToast.success({
        class: 'popup-message',
        theme: 'dark',
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        iconUrl: '../img/checked-circle.svg',
        position: 'topRight',
        pauseOnHover: true,
        timeout: 3000,
        message: `Fulfilled promise in ${delay}ms`,
      })
    })
    .catch(() => {
        iziToast.error({
        class: 'popup-message',
        theme: 'dark',
        backgroundColor: '#ef4040',
        messageColor: '#fff',
        iconUrl: '../img/octagone-x-mark.svg',
        position: 'topRight',
        pauseOnHover: true,
        timeout: 3000,
        message: `Rejected promise in ${delay}ms`,
      })
    })
}

const initForm = () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    popupHandler(form.delay.value, form.state.value);
  });
}

initForm();