console.log(1 + 1);
console.log(1 + 1 + 1);
console.log(10 - 5);
console.log(10 / 5); // division
console.log(2 + 2 * 2); // 
console.log( (2 + 2) * 2);

console.log('----------');
console.log(10 % 1);
console.log(10 % 2);
console.log(10 % 3);
console.log(10 % 4);
console.log(10 % 5); //divdes and gives remainder (ostatok)

console.log('----------');
console.log(1%2);
console.log(2%2);
console.log(3%2);
console.log(4%2);
// x => y
// x % 2 , if result is = 0, is divisible ; if result > 0, then not divisible

console.log('----------');
console.log(10 / 0);
console.log(10 / -0);
console.log(-10 / 0);

console.log('----------');
console.log(1  + '1'); // output 11

const numb = '1'; // string
console.log(1  + numb); // output 11

// number + string , will cast number into string!
console.log(5 - '1'); // output: 4
console.log(5 - 'a'); // output: Nan
console.log(typeof[5 - 'a']);

console.log('----------');
console.log(true + true); // output : 2, true =1
console.log(true + false); // output : 1 , false =0

console.log('----------');
console.log([] + []); // output: [object Object][object Object]
console.log({} + {}); // output: nothing
console.log(['a'] + ['b']); // output:
console.log([] + {}); // output: [object Object]
console.log({} + []); // output: [object Object]

console.log('----------');
console.log(Math.sqrt(9)); // output: 3
console.log(Math.PI); // output: 3.141592653589793

console.log('----------');
console.log(Math.round(5)); // for integer round do nothing
console.log(Math.round(5.6)); // round up
console.log(Math.round(5.4)); // round down

console.log('----------');
console.log(Math.ceil(5)); // for integer ceil do nothing 5
console.log(Math.ceil(5.6)); // ceil put up always 6
console.log(Math.ceil(5.4)); // ceil put up always 6

console.log('----------');
console.log(Math.floor(5)); // for integer round do nothing
console.log(Math.floor(5.6)); // float floor put always down
console.log(Math.floor(5.4)); // float floor put always down

console.log('----------');
let num = 5;
let num2 = 10;
console.log(num > num2);
console.log(num < num2);
console.log(num >= num2);
console.log(num <= num2);

console.log('----------');
console.log(1 <= 2);


console.log('----------');
console.log(1 <= true); // true, because true=1,  1 <= 1
console.log(0 <= 'asd'); // false,  'asd' = Nan 

console.log('----------');
//equals
 num = 5;
 num2 = 10;
console.log(num = 5); // = reassign the value!!!!
console.log(num == 5); // check equals or not? check value, but not a type

console.log(num == '5'); // true
console.log(num ==='5'); // false , checks value and type

console.log('----------');
console.log(num != 4); // true
console.log(num != 5); // false
console.log(num != '5'); //false
console.log(num !== '5'); //true

console.log('----------');
console.log(num === 5 && num2 === 8); // false
console.log(num === 5 && num2 === 10); // true

console.log('----------');
console.log(num === 5 || num2 === 8); // true
console.log(num === 5 || num2 === 10); // true

console.log('----------');
// if num === 4 and num2 === 8 or num2 === 10
console.log(num === 4 && num2 === 8 || num2 === 10); // true!!
console.log(num === 4 && (num2 === 8 || num2 === 10)); // false!!

const foo = num || 10 ; // every value can be boil down to true or false condition!
console.log(foo); // 5

num = 5;
num2 = 10;

if(num > 4) {
    console.log('Number > 4');    
} else { console.log('Number > 4');   }

if (num2 === 10) { console.log('Number2 is 10');}

let cond = 1;
if (cond) {console.log('cond = 1'); }

cond = 0 ; // zero is casted as false!!!
if (cond) {console.log('cond = 1'); } else { console.log('cond = 1');}

cond = ''; // if value is empty, then it is casted into false!
if (cond) {console.log('cond = empty'); }

cond = []; // if value is empty, then it is casted into false!
if (cond) {console.log('cond = empty'); }

const money = 100;
// if money > 10 000, print out: Wow, you are reach!
// if 0-10k print : you got something
// else print : got nothing

if(money > 10000) {
     console.log ('Wow, you are reach!');
} else if (money > 0 && money < 10000) {
    console.log ('you got something 1!');
} else if (money > 0 && money < 10000) {
    console.log ('you got something 2!');
} else {
    console.log ('got nothing'); 
}