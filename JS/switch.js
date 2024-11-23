// const revers = !true;
// console.log(revers);

// /*
//  * Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
//  * Для цього користувач повинен бути:
//  * - другом
//  * - онлайн
//  * - без режиму не турбувати
//  */

// // const isOnline = true;
// // const isFriend = true;
// // const isDnd = false;

// // const canOpenChat = !isDnd && isFriend && isOnline ;

// // console.log('Можна відкрити чат? ', canOpenChat);



// const account = 5000;
// let massage;

// // if(account >= 5000) {
// //     massage = ("U have money for this transaktion");
// // } else{
// //     massage = ('u havent got money')
// // }

// // massage = account >= 5000 ?  "U have money for this transaktion" : 'U havent got money'

// // console.log(massage)



// let totalPrice;   //Проголошення змінної
// const quantity = 7; 
// const price = 15;
// totalPrice = quantity * price;
// let cartCount = 150;

// massage = totalPrice < cartCount ? ('Дякую за замовлення!') : ('Ваш ліміт обмежено!');
// console.log(massage)


// /*
//  * Напиши скрипт вибору готеля по кількості зірок.
//  * 1,2 - 20$,  3,4 - 50$,  5 - 120$
//  *
//  * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
//  * 'Токої кількості зірок немає'
//  */

// const stars = 4;
// let price;
// // Звичайний if
// if(stars <= 2){
//     price = ('20$')
//     console.log(price)
// } else if(stars <=4){
//     price = ('50$')
//     console.log(price)
// }else if(stars ===5){
//     price = ('120$')
//     console.log(price)
// }else if(stars > 6){
//     console.log("This count of stars are not exist")
// }

// // переписуємо на switch
// switch (stars) {
//     case 1:
//     case 2:
//         price = ('20$')
//         console.log(price) 
//         break;
//     case 3:
//     case 4:
//         price = ('50$')
//         console.log(price)
//         break;
//     case 5:
//         price = ('120$')
//         console.log(price)
//         break;
//     default:
//         console.log("This count of stars are not exist")
//         break;
// }



/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в змінній option: 1 - самовивоз, 2 - кур"єр, 3 - пошта
 *
 * В змінну message записати повідомлення в залежності від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонит менеджер'
 */

// 1 створюємо змінні
// 2. робимо світч
// 3. перевіряємо на рівність опцію і виводимо повідоилення
// 4. дефолтне повідомлення
// const option = '';
// const pickup;
// const courier;
// const post;
// let massage;
// switch (option) {
//     case 'pickup':
//         massage = 'U can pickup your pacage at 12.00'
//         break;
//     case 'courier':
//         massage = "Couriel will come to at **.**"
//         break
//     case'post':
//         massage = 'Pacage will delivered today'
//         break
//     default:
//         massage = "Manager will call u back"
//         break;
// }
// console.log(massage);



/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

 const sub = 'free';
// let canAccessContent;
// // якщо користувач pro або користувач vip тоді є доступ
// // const canAccessContent =;
// switch (sub) {
//     case 'vip':
//     case 'pro':
//         canAccessContent = true;
//         break;
//     case 'free':
//         canAccessContent = false;
//         break
//     default:
//         console.log('U haven got subscribtion');
//         break;
// }

// console.log('Є доступ до контенту? ', canAccessContent);



// const canAccessContent = sub === 'vip' || sub === 'pro';

// console.log('Є доступ до контенту? ', canAccessContent);


/*
 * Напиши скрипт підрахунку суми покупки зі знижкою в залежності від витраченої 
 * суми за весь час (партнерська програма).
 *
 * - Загальна сума витрачених коштів зберігається в змінній totalSpent
 * - Сума поточного платежа зберігається в змінній payment
 * - Знижка зберігається в змінній discount
 *
 * - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
 * - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
 * - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
 * - Якщо витрачено менше 100) - не партнер, знижка 0%
 *
 * - В результаті вивести повідомлення
 * «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»
 */

const totalSpent = 50;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = '2%'
} else if (totalSpent >= 1000 && totalSpent <5000) {
    discount = '5%'
} else if (totalSpent >= 5000) {
    discount = '10%'
} else if(totalSpent < 100) {
    discount = '0%'
}

console.log(`Your order is ${payment} and your sell is ${discount}`);

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'