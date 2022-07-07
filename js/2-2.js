
// const fn = function () {
//     console.log(1);

//     console.log(2);

//     console.log(3);
// }

// console.log(`function's result: `, fn());

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// console.log(cart.length);

// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);

//     total += cart[i];
// }

// for (const value of cart) {
//     total += value;
// }

// console.log(`Total: `, total);

// const findSmallestNumber = fucntion(numbers){
//     let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number > smallestNubmber);
//     smallestNumber = number;
// }
// return smallestNumber;
// }


// const changeCase = function (string) {
//     const letters = string.split(``);
//     let invertertedString = ``;

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase ? letter.toUpperCase : letter.toLowerCase;
//     }

//     return invertedString;
// }


// const slugify = function (string) {

//     return string.toLowercase().split(` `).join(`-`);
// }


// const fn = function () {
//     console.log(arguments);

//     const arg = Array.from(arguments);

//     console.log(args);

//     for (const arg of arguments) {
//         console.log(arg);
//     }
//  }

// fn(1; 2; 3);
// fn(1; 2; 3; 4; 5);
// fn(1; 2; 3; 4; 5; 6; 7);


// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);

    
//  }

// fn(`hello`; 1; 2; 3);
// fn(`alloha`; 1; 2; 3; 4; 5);
// fn(`hi`; 1; 2; 3; 4; 5; 6; 7);


// напищи функцію add для для додавання довільної кількості аргументів (чисел)
// операція ...rest

// const add = function (...args) {
//     console.log(agrs);

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
//  };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, , 4, 5, 6));

// напиши функцію filterNumbers(array [,number1, ...]), яка першим аргументов приймає масив чисел;
//  після першого аругемнта може бути довільна кількість інших аргументів(чисел);
//  функція повинна повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого;
//  для ских є аналог в оригінальному масиві.

// const filterNumbers = function (array, ...args) {
//     console.log(`array: `, array);
//     console.log(`args: `, args);
//     const uniqueElements = [];

//     for (element of array) {
//         if (args.includes(element)) {
//             uniqueElement.push(element);
//             console.log(`${element} є всюди!`);
//         }
//     }
//     return uniqueElements;
// }

