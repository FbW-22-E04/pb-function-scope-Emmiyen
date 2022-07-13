function expo(a, b) {
    if (typeof a === 'number' && typeof b === 'number'){
for (let i = 1; i <= b; i++)
console.log(a ** i);
    }
}

expo(3, 5);
// console.log(3 ** 1,3 ** 2,3 ** 3,3 ** 4,3 ** 5);
function expo(a, b) {
    if (typeof a === 'number' && typeof b === 'number'){
for (let i = 1; i <= b; i++)
console.log(a ** i);
    }
}

expo(2, 8);

//2

let fruit = 'strawberrys';

function printFavoriteFruit(fruit) {
    fruit = 'peach'
    console.log('my favorite fruit is:', fruit);
}
printFavoriteFruit (fruit);

//3

//because it is inside of the function scope
function exponent(a, b) {
    let result = a ** b;
    console.log(result);
}
exponent(2, 8);
