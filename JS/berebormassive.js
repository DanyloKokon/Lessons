// const numbers = [5, 10, 15, 20, 25];


/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */

// let total;
// numbers.forEach(function (number) {
//     total+=number


//  })
//  console.log(total);



// const names = ['Галя', 'Александрія', 'Арчібальд']
// const oklyk = []
// names.forEach(function (name) {
//     oklyk.push(name + '!')
// })
// console.log(oklyk);

// const users = [{
//     name: "John",
//     age: 25,
//     city: "New York",
//     occupation: "Software Engineer"
// },
// {
//     name: "Emily",
//     age: 32,
//     city: "Los Angeles",
//     occupation: "Marketing Manager"
// },
// {
//     name: "Mike",
//     age: 40,
//     city: "Chicago",
//     occupation: "Accountant"
// },]



// const obj = {
//     a: 5,
//     b: 20,
//     c: 15,
// }















/*
 * Array.prototype.map()
 * - Поелементо перебирає оригінальний масив
 * - Не змінює оригінальний масив
 * - Повертає новий масив такої ж довжини
//  */
// const numbers = [5, 10, 15, 20, 25];

// const newNumbers = numbers.map(function (num) {
//     return num*2
// })
// console.log(newNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

//   const playersName = players.map(function({name}){
//     return name
//   })

//   const playersPoints = players.map(function({points}){
//     return points+10
//   })
// console.log(playersPoints);
















/*
 * Array.prototype.filter()
 * - Поелементо перебирає оригінальний масив
 * - Повертає новий масив (з елементами або пустий)
 * - Додає в повертаємий масив елементи які задовольняють умови коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */


/*
 * Отримуємо масив всіх гравців онлайн
 */
const isOnline = players.filter(function (player) {
  return player.online
})
console.log(isOnline);

const hardPlayers = players.filter(function (playerHard) {
  return playerHard.timePlayed >= 200
})
console.log(hardPlayers);
















/* Array.prototype.find()
* - Поелементо перебирає оригінальний масив
* - Повертає перший елемент який задовольняє умову пошуку або undefined
*/

const playerId = 'player-1'
const findPlayerId = players.find(function (player) {
  return player.id === playerId
})
console.log(findPlayerId);


/*
 * Шукаємо гравця по імені
 */

const nameToFind = 'Chelsy'
const findPlayerName = players.find(function (player) {
  return player.name === nameToFind
})
console.log(findPlayerName);


















/*
   * Array.prototype.every()
   * - Поелементо перебирає оригінальний масив
   * - Повертає true якщо всі елементи масива задовільняють умову
   */


// anyHardcorePlayers

const anyHardcorePlayers = players.every(function (hardcore) {
  return hardcore.timePlayed >= 100
})

console.log(anyHardcorePlayers);




/* Array.prototype.some()
* - Поелементо перебирає оригінальний масив
* - Повертає true якщо хоча б один елемент масива задовільняє умову
*/


const isAnyOnline = players.some(function (live) {
  return live.online === true
})
console.log(isAnyOnline);









/*
 * Array.prototype.reduce()
 * - Поелементо перебирає оригінальний масив
 * - Повертає що завгодно 🤯
 * - Замінює все на світі, але використовувати потрібно з розумом
 */

// const numbers = [5, 10, 15, 20, 25];

// const tootal = numbers.reduce(function(acc, number){
//   console.log('acc:', acc);
//   console.log('num:', number);
//   return acc += number
// }, 0)


const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const all = Object.values(salary)
const lastTot = all.reduce(function (total, number) {
  return total += number
}, 0)
console.log(lastTot);



const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTweets = tweets.reduce(function (tags, tweet) { }, [])