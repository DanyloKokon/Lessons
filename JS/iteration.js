// const names = ['Mark', 'Andriy', 'Damian', 'Dania']
// console.log(names.length);
// console.log(names[2]);
// console.log(names);




// const fruits = ['Apples', 'Oranges', 'Tangarines', 'Banana', 'Something']
// console.log(fruits[0].toLowerCase());
// console.log(fruits[fruits.length - 1]);

const cities = ['Kharkiv', 'Lviv', 'Zhytomyr','Kyiv', 'Chernigiv', 'Dnipro']


// cities[0]
// cities[1]
// cities[2]
// cities[3]
// cities[4]

// // for (let i = 0; i < cities.length; i+=1) {
// //     console.log(i);   
// //     console.log(cities[i]); 
// // }
// // cities[0] += '!'
// // console.log(cities);

// for (const city of cities) {
//     console.log(city);
    
// }
/*
 * Порахувати загальну суму покупок в корзині
 */
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let summa = 0;
// for (const plural of cart) {
//     summa += plural
// }
// console.log(summa);


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;
// for (const number of numbers) {
//     if (number % 2 === 0 ) {
//         total += number
//     }
// }
// console.log(total)

for (const towm of cities) {
    console.log(towm);
    if (towm.includes('Kyiv')) {
        break
    }
}