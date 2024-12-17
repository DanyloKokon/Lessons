function getSum(a, b) {
    console.log(a + b);
}

getSum(5, 5)
getSum(10, 15)


const testMassive = ['Dania', 'Mark', 'AndriyKo', 'Ira', 'Damian']
// testMassive.push('Matvii' , 'AndriyPo');
// testMassive.unshift('Maria');

function addNames(name) {
    testMassive.push(name);  
}

addNames('Matvii');
addNames('AndrijPo');
addNames('Maria');
console.log(testMassive);