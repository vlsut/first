// Task 1
const mark = 49;

if (mark >= 90 && mark <= 100)   {
    console.log("відмінно")
} else if (mark >= 70 && mark <= 89) {
    console.log("добре")
} else if (mark >= 50 && mark <=69) {
    console.log("задовільно")
} else {
    console.log("незадовільно")
}

// Task 2
const number1 = 2;
const number2 = 2;
const action="поділити";

switch (action) {
    case "додати":
        console.log(number1 + number2);
        break;
    case "відняти":
        console.log(number1 - number2);
        break;
    case "помножити":
        console.log(number1 * number2);
        break;
    case "поділити":
        console.log(number1 / number2);
        break;
    default:
        console.log("невідома дія")
}

// Task 3
const n=64;
console.log(n%2===0 ?"парне":"непарне")
