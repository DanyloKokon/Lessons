const revers = !true;
console.log(revers);

/*
 * Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
 * Для цього користувач повинен бути:
 * - другом
 * - онлайн
 * - без режиму не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = !isDnd && isFriend && isOnline ;

// console.log('Можна відкрити чат? ', canOpenChat);



const account = 5000;
let massage;

// if(account >= 5000) {
//     massage = ("U have money for this transaktion");
// } else{
//     massage = ('u havent got money')
// }

// massage = account >= 5000 ?  "U have money for this transaktion" : 'U havent got money'

// console.log(massage)



let totalPrice;   //Проголошення змінної
const quantity = 7; 
const price = 15;
totalPrice = quantity * price;
let cartCount = 150;

massage = totalPrice < cartCount ? ('Дякую за замовлення!') : ('Ваш ліміт обмежено!');
console.log(massage)


/*
 * Напиши скрипт вибору готеля по кількості зірок.
 * 1,2 - 20$,  3,4 - 50$,  5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Токої кількості зірок немає'
 */

const stars = 4;
let price;
// Звичайний if
if(stars <= 2){
    price = ('20$')
    console.log(price)
} else if(stars <=4){
    price = ('50$')
    console.log(price)
}else if(stars ===5){
    price = ('120$')
    console.log(price)
}else if(stars > 6){
    console.log("This count of stars are not exist")
}

// переписуємо на switch
switch(stars){
    
}



