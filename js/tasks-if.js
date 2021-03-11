// task 1
console.log ('----Tasks 1:------');

let num3 = 8;
if (num3 % 2 == 0) {
    console.log (`Number: ${num3} is even`);
} else {
    console.log (`Number: ${num3} is odd`);
}

console.log('');
// task 2
console.log ('----Tasks 2:------');

let age = 22;

if (age > 0 && age <= 18) {
    console.log ('You are in age group 0-18');
} else if (age >= 19 && age <= 30) {
    console.log ('You are in age group 19-30');
} else if (age >= 31 && age <= 40) {
    console.log ('You are in age group 31-40');
} else if (age >= 41 && age <= 50) {
    console.log ('You are in age group 41-50');
} else if (age >= 51) {
    console.log ('You are in age group 51+');
}

console.log('');
// task 3 
console.log ('----Tasks 3:------');

let num4 = 18;

 if (num4 % 2 == 0 && num4 % 3 == 0){
    console.log ("Fizz Bazz");
} else if (num4 % 2 == 0) {
    console.log ("Fizz");
} else if (num4 % 3 == 0) {
    console.log ("Bazz");
} else {
    console.log(num4);
}