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