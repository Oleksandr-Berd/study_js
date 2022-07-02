// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else {
//     console.log('there is no such stars');
// }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30
//         break;
//     default:
//         console.log('there is no such stars');
// }

// console.log(price);

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('there is no such stars');
// }

// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30
//         break;
//     default:
//         console.log('there is no such stars');
// }

// console.log(price);



// const option = 2;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'You can take your order tommorow in the office.';
//         break;
    
//     case 2:
//         message = 'Curier delivers your order tommorow from 10am till 5 pm';
//         break;
    
//     case 3:
//         message = 'Your order will be sent today via post.';
//         break;
    
//     default:
//         message = 'Manager will call you.';
// }

// console.log(message);



// for (let i = 0; i < 5; i += 1){
//     console.log(i);
// }

// console.log('qwerty');


// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary,);
//     console.log(`Empoloyee's salary number ${i} - ${salary}`);

//     totalSalary += salary;
// }
// console.log(`totalSalary: `, totalSalary);



// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1){
//     console.log(i);

//     if (i % 2 !== 0) {
//         console.log(`uneven: `, i);
//         continue;
//     }
//      console.log(`even: `, i);
//         total += i;
// }
// console.log(`total: `, total);


// let balance = 10000;
// const payment = 2000;
// console.log(`Total worth of order ${payment} credits. Check available credits on account.`,);
// if (balance >= payment){
//     balance -= payment;

//     console.log(`There are ${balance} credits on your account`);
// } else {
//     console.log(`There are unsufficient costs on your account for compliting transaction`);
// }

// console.log(`Transaction is completed`);


// let totalSpent = 5000;
// let payment = 500;
// let discount = 0;


// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(`Bronze partner, discount 2%`);
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(`Silver partner, discount 5%`);
//     discount = 0.05;
// } else if (totalSpent >= 5000){
//     console.log(`Golden parner, discount 10%`);
//     discount = 0.1;
// } else {
//     discount = 0;
//     console.log(`Not a partner, discount 0%`);
// }

// payment -= payment * discount;

// console.log(`Order proceeding on the ammount ${payment} with the discount ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Total ammount of spent in a shop: ${totalSpent}`);

// function highAndLow(string) {
//     const numbers = string.split(` `);

//     const max = Math.max(...numbers);
//     const min = Math.min(...numbers);

//     return `${max} ${min}`;
// }


// const btnAdd = document.querySelector(`button[data-add]`);
// const valueInput = document.querySelector(`input[data-value]`);
// const outputEl = document.querySelector(`.js-output`);

// console.log(outputEl);

// let total = 0;

// btnAdd.addEventListener(`click`, function (){
//     console.log(`click qwerty`);

//     const value = Number(valueInput.value);

//     console.log(value);

//     total += value;

//     console.log(`total: `, total);

//     valueInput.value = ` `;
// })
