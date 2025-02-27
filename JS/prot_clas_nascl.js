// const user = {
//     name: 'Mango',
//     age: 2,

// }

// const students = {
//     name: 'Bob',
//     age: 25,
//     course : 'JS',
// }

// const obj1 = Object.create(user);
// console.log(obj1.name);
// console.log(obj1.age);
// const obj2 = Object.create(students);
// console.log(obj2.name)


// const add =  {
// total = 0,
// num1 =5,
// num2 = 10,

// geySum() {
//     return this.total = this.num1 + this.num2
// }
// }

// const objCon = {
// baseSalary = 30000;
// overtime = 10;
// rate = 20;

// getWage = () => {
//   return this.baseSalary + this.overtime * this.rate;
// };
// }
// objCon.getWage(baseSalary, overtime, rate);
// // const baseSalary = 30000;
// // const overtime = 10;
// // const rate = 20;

// // const getWage = (baseSalary, overtime, rate) => {
// //   return baseSalary + overtime * rate;
// // };

// objCon.getWage(baseSalary, overtime, rate);



// ----------------------------Class--------------------------------
class Car {
    constructor({model, price, color}){
      this.model = model
      this.price = price
      this.color = color
    }
}

const car1 = new Car({model:'Audi',price:50000,color:'red' })
const car2 = new Car({model:'Mercedec',price:90000,color:'white' })
const car3 = new Car({model:'Mazda',price:5000,color:'black' })
console.log(car1);
console.log(car2);
console.log(car3);



class Games{
  constructor({genre, platform, name}){
    this.genre = genre
    this.platform = platform
    this.name = name
  }
  // changePrice(newPrice){
  //   this.price = newPrice
  // }
  getModel(){
    console.log(this.name);
  }
}

const game1 = new Games({genre:'MMO-RPG', platform: ['Windows','Android','Ios', 'PS' ,'XBox'], name:'Genshin'});
const game2 = new Games({genre:'Open-world', platform: ['Windows','Android','Ios', 'PS' ,'XBox'], name:'Minecraft'});
console.log(game1);
console.log(game2);
game2.getModel()
//  
//--------------------------------------------------------------------------------------
// Завдання 5
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
    static getSpecs(car) {
      console.log(`distance ${car.distance}`);
      console.log(`speed ${car.speed}`);
      console.log(`price ${car.price}`);
      console.log(`max speed ${car.maxSpeed}`);
      console.log(`is engin on ${car.isOn}`);
    }

 /*
  * Додай статичний метод `getSpecs(car)`,
  * який приймає об'єкт-машину як параметр і виводить
  * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
  */

 /*
  * Конструктор отримує об'єкт налаштувань.
  *
  * Додай властивості майбутнього екземпляра класу:
  * speed - поточна швидкість, початкова 0
  * price - ціна автомобіля
  * maxSpeed - максимальна швидкість
  * isOn - заведений автомобіль, значення true або false. Спочатку false
  * distance - загальний кілометраж, спочатку 0
  */
 constructor({price, maxSpeed}) {
  this.speed = 0
  this._price = price
  this.maxSpeed = maxSpeed
  this.isOn = false
  this.distance = 0
 }
 get price() {
  return this._price
  }
  setPrice(newPrice){
  this.price = newPrice
  }
 /*
  * Додай геттер і сеттер для властивості price,
  * який буде працювати з властивістю ціни автомобіля.
  */

 /*
  * Додай код для того, щоб завести автомобіль
  * Записує у властивість isOn значення true
  */
 turnOn() {
  this.isOn = true
 }

 /*
  * Додай код для того, щоб заглушити автомобіль
  * Записує у властивість isOn значення false,
  * і скидає поточну швидкість в 0
  */
 turnOff() {
  this.isOn = false
  this.speed = 0
 }

 /*
  * Додає до властивості speed отримане значення,
  * за умови, що результуюча швидкість
  * не більше, ніж значення властивості maxSpeed
  */
 accelerate(value) {

  if (newSpeed <= this.maxSpeed){
    this.speed += value
  } else (
    alert('this speed is more than max')
  )
 }

 /*
  * Забирає від властивості speed отримане значення,
  * за умови, що результуюча швидкість не менше нуля
  */
 decelerate(value) {
  if (this.speed)
 }



 get model() {
  console.log(this._model);
}

set model(newModel) {
  this._model = newModel
}


 /*
  * Додає в поле distance кілометраж (hours * speed),
  * але тільки в тому випадку, якщо машина заведена!
  */
 drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.price
// mustang.price = 4000
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000