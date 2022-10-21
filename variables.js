// The `var` keyword is weird!
var x = 10;

if (x === 10) {
    var x = 4;
    console.log(x); // 4
}

console.log(x); // 4

// Use `let` insead :)
var y = 10;

if (y === 10) {
    let y = 4;
    console.log(y); // 4
}

console.log(y); // 10

// A `const` can't be changed
const z = 7;

console.log(z); // 7

z = 4; // This will produce an error
