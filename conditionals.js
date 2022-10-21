let grade = 87;
let letterGrade = null;

if (grade >= 90) {
    letterGrade = "A";
} else if (grade >= 80) {
    letterGrade = "B";
} else if (grade >= 70) {
    letterGrade = "C";
} else if (grade >= 60) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log(`Your grade is ${letterGrade}`);
// Output: "Your grade is B"