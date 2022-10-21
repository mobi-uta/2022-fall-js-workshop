// Traditional for loop
for (let i = 1; i < 5; i++) {
    console.log(i * 3);
}

/* Output:
3
6
9
12
*/

// for-of loop: iterate over values in an object
let animals = ["dog", "cat", "horse", "pig"];

for (let animal of animals) {
    if (animal.length === 3) {
        console.log(animal);
    }
}

/* Output:
dog
cat
pig
*/

// for-in loop: iterate over properties of an object
let myCar = {
    make: "Honda",
    model: "Civic",
    year: 1996,
    color: "black"
}

for (let prop in myCar) {
    console.log(`${prop}: ${myCar[prop]}`);
}

/* Output:
make: "Honda"
model: "Civic"
year: 1996
color: "black"
*/

// while loop
let x = 1;

while (x < 5) {
    console.log(x);
    x++;
}

/* Output:
1
2
3
4
*/

// do-while loop
let y = 1;
do {
    console.log(y);
    y++;
} while (y < 5)

/* Output: 
1
2
3
4
*/
