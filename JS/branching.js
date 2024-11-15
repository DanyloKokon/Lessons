// Lesson Branching if <<Розгалуження>>

// if (5 > 2) {
//     console.log('Win')


// }

// let totalPrice;   //Проголошення змінної
// const quantity = 7; 
// const price = 150;
// totalPrice = quantity * price; //Надати змінній значення
// let cartCount = 150 ;
// if(totalPrice < cartCount){
//     console.log('Дякую за замовлення!');     //Почали розгфлуження
// }else{
//     console.log('Ваш ліміт обмежено!');  
// }
// console.log('Дякую, що завітали на наш сайт');


const salary = 4000;

// if(salary <= 1000){
//     console.log('1 рівень досвіду');
// } else if(salary <= 2000 ){
//     console.log('2 рівень досвіду');
// } else if(salary <= 3000){
//     console.log('3 рівень досвіду')
// }else if (salary <= 4500) {
//     console.log('Керівник відділу');
// };
// console.log('1 рівень досвіду');
//  console.log('2 рівень досвіду');
//   console.log('3 рівень досвіду');
//  console.log('Керівник відділу');



if(salary < 2000){
    console.log('1 рівень досвіду');
} else if(salary >= 2000 && salary < 3000 ){
    console.log('2 рівень досвіду');
} else if(salary >= 3000 && salary < 4500){
    console.log('3 рівень досвіду')
}else if (salary > 4500) {
    console.log('Керівник відділу');
};



/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначень x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */
//                  10                      30 
// ================================================================
//                  x1                      x2
const x1 = 10;
const x2 = 30;
const number = 20;

console.log(`Число ${number} потрапляє у відрізок до ${x1}? , `);

console.log(`Число ${number} потрапляє у відрізок після ${x2}? , `);

console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}?, `);

console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}?  `, number < x1 || number > x2);

