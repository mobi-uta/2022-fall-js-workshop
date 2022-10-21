// Arrays.prototype.slice
let foods = ["apple", "bannana", "watermelon", "cucumber", "lettuce"];
let fruits = foods.slice(0,3);   // ["apple", "bannana", "watermelon"]
let vegetbles = foods.slice(3);  // ["cucumber", "lettuce"]

// Arrays.prototype.filter & Arrays.prototype.map
let Bob = {name: "Bob", age: 27};
let Steve = {name: "Steve", age: 43};
let Jake = {name: "Jake", age: 14};

let people = [Bob, Steve, Jake];

let adults = people.filter(person => person.age > 18);
console.log(adults);
/* Output:
[
    {name: "Bob", age: 27},
    {name: "Steve", age: 43}
]
*/

console.log(adults.map(adult => adult.name));
// Output: ["Bob", "Steve"]
