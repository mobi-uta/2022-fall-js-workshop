let fruits = new Map([
  ["apple", 2],
  ["banana", 5],
  ["mango", 3],
  ["orange", 0],
]);

let mangoes = fruits.get("mango"); // 3
let grapes = fruits.get("grape"); // undefined

const languages = new Set([
  "C",
  "C++",
  "Python",
  "Ruby",
  "JavaScript",
  "Python",
]);

for (let language of languages) {
  console.log(language);
}

/* Output:
C
C++
Python
Ruby
JavaScript
Python
*/
