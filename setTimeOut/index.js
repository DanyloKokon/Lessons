// console.log(1);
// setTimeout(() => {
//   console.log('1.5');
// }, 1000);

// console.log(2);

// setInterval(() => {
//   console.log('3');
// }, 1000);



// const now = document.querySelector('#now');
// const notshy = document.querySelector('#notshy');

// let quantity = 0;
// now.addEventListener('click', () => {
//  const setIntervalId = setInterval(() => {
//   window.alert(`Hello ${notshy.value} times`);
//   quantity += 1;
//   if (quantity === Number(notshy.value)) {
//     clearInterval(setIntervalId);
//     console.log('Interval cleared after 5 alerts');
//   }
// }, 3000);
// });




// ЗАДАЧА 1
/**
 * Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, 
 * починаючи від from і закінчуючи to.
    * Зробіть два варіанти рішення.
    * 1. Використовуючи setInterval.
    
 */

// function printNumbers(from, to) {
//   let current = from;
//   const intervalId = setInterval(() => {
//     console.log(current);
//     if (current === to) {
//       clearInterval(intervalId);
//     }
//     current+=1;
//   }, 1000);
// }
// printNumbers(1, 1000);



/**
 * - Показуєм і приховуємо за допомогою класу is-visible
 * - Приховуємо через певний час
 * - Приховуємо під час кліку
 * - Очищаємо таймер
 */


const notification = document.querySelector('.js-alert');
showNotification()
function showNotification() {
 notification.classList.add('is-visible');
}

function hideNotification() {
 notification.classList.remove('is-visible');
}


setTimeout(hideNotification, 3000);
notification.addEventListener('click', () => {
 clearTimeout(hideNotification);
 hideNotification();
});