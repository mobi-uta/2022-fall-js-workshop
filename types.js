// `null` vs `undefined`
let something = null;
console.log(something); // null

let anotherThing;
console.log(anotherThing); // undefined

// Booleans
!true;         // false
true && true;  //true
true || false  // true
false || false // false

// `String` data type
let greeting = "Hello world";
let farewell = "Goodbye world";

greeting.startsWith("Hello");  // true
greeting.endsWith("world");    // true
farewell.endsWith("world");    // true

let greet2 = greeting.repeat(2);
console.log(greet2);
// "Hello worldHello world"

// `Number` data type
let priceStr = "2.50";
let price = parseInt(priceStr);

console.log(`The price is ${price + 0.25}`);
// Output: "The price is 2.75"

// `Object` data type
let object = {
    "key": "value"
}

let computer = {
    "brand": "Lenovo",
    "model": "Thinkpad",
    "size": 15
}

// Object values can be accessed using either the dot operator or array bracket notation
console.log(`My computer is a ${computer.brand} ${computer.model} and it is ${computer[size]} inches`);
// Output: "My computer is a Lenovo Thinkpad and it is 15 inches"
