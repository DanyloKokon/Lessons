// import {mthr} from './second.js'; 

// console.log(mthr(1, 10)); // This will log a random number between 1 and 10

// //imenyj inport
// import {filtnum} from './filnum.js';
// console.log(filtnum([1, 5, 10, 15, 20])); // This will log [10, 15, 20]

// import concutM from './default.js';
// console.log(concutM); // This will log 'dania kebab'
// import Chart from 'chart.js/auto'
// const ctx = document.getElementById('myChart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//       datasets: [{
//         label: 'Num of sales',
//         data: [120, 150, 180, 200, 220, 250],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//  });
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox'
const image = '<img src="https://images.pexels.com/photos/16330147/pexels-photo-16330147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">';
const instance = basicLightbox.create(image)
const button = document.querySelector('button').addEventListener('click', () => {
  instance.show();
})