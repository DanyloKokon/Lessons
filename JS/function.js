// function getSum(a, b) {
//     console.log(a + b);
// }

// getSum(5, 5)
// getSum(10, 15)


// const testMassive = ['Dania', 'Mark', 'AndriyKo', 'Ira', 'Damian']
// // testMassive.push('Matvii' , 'AndriyPo');
// // testMassive.unshift('Maria');

// function addNames(name) {
//     testMassive.push(name);  
// }

// addNames('Matvii');
// addNames('AndrijPo');
// addNames('Maria');
// console.log(testMassive);


/**
 * Напишіть функцію doTask(callback), яка викликає передану їй функцію.
 * Напишіть функцію modifyArray(arr, callback), яка приймає масив і колбек для 
 * зміни кожного елемента масиву (збільшення кожного елемента вдвічі).
 */


function modifyArray (array, callback){
// // function must return new massive with elements that sutisfy the condition callback
// let newArray = [];
// for (const element of array) {
//     if (callback(element)){
//         newArray.push(element);
//     }
// }
// return newArray;
}
// function filter(value){
//     return value >=3; 
    
// }

// function filter2(value){
//     return value <=4; 
    
// }

// console.log(modifyArray([1, 2, 3, 4, 5], filter2));
// modifyArray([1, 2, 3, 4, 5]);



function findWord(words, callback){
    let findedWord = [];
    for (const element of words) {
        if (callback(element)){
            findedWord.push(element);
        }
    }
    return findedWord;
}

function find1(word){
    return word.length >= 5;
}
console.log(findWord(['Dania', 'Mark', 'AndriyKo', 'Ira', 'Damian'], find1))