import { formatWithOptions } from "util";

/*
import '../styles/index.scss';

console.log('webpack starterkit');
*/

console.log('Hello World?!!!!!');

// `npm run start` is the actual command; not `npm run dev`

// Rest Parameters
function sendCars(...allCarIds) {
    allCarIds.forEach( id => console.log(id));
}

sendCars(100,200,555);

// 100 200 555

// Destructuring Arrays
let carIds = [1,2,5];
let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);

let carIds2 = [1,2,5];
let car21, remainingCars21;
[car21, ... remainingCars21] = carIds2;
console.log(car21, remainingCars21);

// use commas to skip elements

let carIds3 = [1,2,5];
let remainingCars3;
[, ...remainingCars3] = carIds3;

console.log(remainingCars3);

// Destructuring Objects

/*
//Declare and initialize when destructuring object
let car = { id: 5000, style: 'convertible'};
let {id, style} = car;

console.log(id, style);
*/

//Declare but without initializing variables
let car = { id: 5000, style: 'convertible' };
let id, style;
({ id, style } = car);

console.log(id, style);


// Spread Syntax

function startCars(car41,car42,car43, ...rest) {
    console.log(rest);
}

let carIds4 = [1,2,3,4,5,6];
startCars(...carIds4);


// typeof()

// Common Type Conversions
//convert to string
var foo=123;
console.log(foo.toString());
//convert string to integer
console.log(Number.parseInt('55'));
//convert string to number
console.log(Number.parseFloat('55.99ABC')); // 55.99


// Controlling Loops

// Operators

//Unary Operators
let year = 1967;
console.log(year++);
console.log(year);

let yare = "1967";
console.log(-yare);
console.log(typeof(yare));
//console.log(typeof(+yare)); //convert yare to number

//Relational Operators
let s1 = 'Zoo';
let s2 = 'alphabet';
//FORCE BOTH TO UPPERCASE FOR EXPECTED COMPARISON RESULT
if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
}
else {
    console.log(false);
    console.log('Zoo is not lower than alphabet with toUpperCase');
}

//Conditional Operators
console.log( (5>4) ? 'yes' : 'no');
console.log( 5>4 ? 'yes' : 'no');
