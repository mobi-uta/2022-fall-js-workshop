function greeting1(name) {
    return `Hello ${name}!`;
}

let greeting2 = (name) => `Hello ${name}!`;

console.log(greeting1("Alice"));   // Output: "Hello Alice!"
console.log(greeting2("George"));  // Output: "Hello George!"