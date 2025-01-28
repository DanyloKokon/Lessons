// Створіть об'єкт "person" з властивостями "name", "age", "gender". Додайте до об'єкту метод, який буде виводити на екран повідомлення про особистість зі значеннями всіх властивостей.
const person = {
    name: 'Jane Doe',
    age: '?',
    gender: 'Female',
    infoPer(name, age, gender){
     console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
    }
}
person.infoPer(person.name, person.age, person.gender)
// Створіть масив об'єктів "students", де кожен об'єкт буде містити властивості "name", "age", "gender" та "grade". Напишіть функцію, яка приймає масив об'єктів "students" і повертає середній бал групи.
const students = [
    {   name: '',
        age: 0,
        gender: '',
        grade: 12,
    },

    {   name: '',
        age: 0,
        gender: '',
        grade: 12,
    },

    {
        name: '',
        age: 0,
        gender: '',
        grade: 12,
    }

]
function sumGrade(students) {
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        const grade = students[i];
        total+= grade.grade
    }
    const cout = students.length;
    const serGrade = total/cout
    console.log(serGrade);
}
sumGrade(students)
// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить
// змінювати значення властивостей.
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    changeValue(title, author, year, genre){
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }
}
book.changeValue('Harry Potter', 'J.K. Rowling', 1997, 'Fantasy')
console.log(book);

// Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей.
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2005,
    color: 'Black',
    infoCar(brand, model, year, color){
        console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}, Color: ${color}`);
    }
}
car.infoCar(car.brand, car.model, car.year, car.color)

// Створіть об'єкт "restaurant" з властивостями "name", "cuisine", "address" та "rating". Додайте до об'єкту метод, який дозволить змінювати значення властивостей "address" та "rating"
const restaurant = {
    name: 'KFC',
    cuisine: 'Fast Food',
    address: 'Kyiv',
    rating: 4.5,
    changeValue(address, rating){
        this.address = address;
        this.rating = rating;
    }
}
restaurant.changeValue('Lviv', 4.7)
console.log(restaurant);
