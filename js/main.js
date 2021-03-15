let num = 10;
console.log('Value is:', num);
const output1 = num++;
console.log('Value output1++ is:', output1); // 10
console.log('Value num is:', num);// 11
const output2 = ++num;
console.log('Value ++output2 is:', output2); // 12 
console.log('Value num is:', num); // 12

const num1 = 1;
switch (num1) {
    case 1:
        console.log('Value is 1');
        break;
    case 2:
        console.log('Value is 2');
        break;
    case 3:
        console.log('Value is 3');
        break;

    default:
        console.log('Value is not between 1 and 3');
        break;
}

const url = '/users';

switch (url) {
    case '/users':
        console.log('Load the users page');
        break;
    case '/about-us':
        console.log('Load the about-us page');
        break;
    case '/contacts':
        console.log('Load the contacts page');
        break;
    case '/home':
        console.log('Load the home page');
        break;

    default:
        console.log('Load the 404');
        break;
}

let num2 = 1;
while (num2 < 5) {
    console.log(`While loop inetarion ${num2}`);
    num2++;
}

let num3 = 0;
do {
    console.log(`While loop inetarion ${num3}`);
    num3++;
} while (num3 > 10);


for(let i = 0; i < 51; i+= 10){
    console.log('the number is: ', i);
}

const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
// cars[0] += ' is a nice car';
for (var i = 0; i < cars.length; i++ ){
// console.log(`${cars[i]} is a nice car`);
   cars[i] += ' is a nice car';
}
console.log(cars);