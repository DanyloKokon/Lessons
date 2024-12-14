//Створити масив з 10-ти чисел.
// Знайти та вивести на екран максимальне значення з масиву.
const numbers = [1, 44, 22, 738, 54, 98]
let realmaxNum = numbers[0];
for (const maxnum of numbers) {
    if (maxnum > realmaxNum) {
        realmaxNum = maxnum
    } }
    console.log(realmaxNum);



