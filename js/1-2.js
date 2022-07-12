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



// написати код, який запитує у користувача "Який ваш улюблений фільм Тарантіно". 
// Якщо відповідь Pulp Fiction - показати Вітаю фанатів класики.
// Інакше - Передивіться Pulp Fiction.
// Викорситайте alert та prompt. 
// Бажано використайте незалежно від реєста (case-insensetive).

// const movieName = prompt(`Який ваш улюблений фільм Тарантіно`);
// if (movieName.toLowerCase === "Pupl Fiction".toLowerCase){
//     alert("Вітаю фанатів класики");
// } else {
//     alert("Передивіться Pulp Fiction");
// }

// default alert

// let response = "Передивіться Pulp Fiction";
// if (movieName.toLowerCase === "Pupl Fiction".toLowerCase){
//     response = "Вітаю фанатів класики";
// } 
// alert(response);

// ternary

// let response = movieName.toLowerCase === "Pupl Fiction".toLowerCase
//     ? "Вітаю фанатів класики";
//     : "Передивіться Pulp Fiction";


// написати код, що пропонувати користувачу залогінитися на сайт(prompt)
//     - якщо користувач пише`admin`, запитати пароль;
// - якщо нічого не введено чи користувач закриває prompt - вивести в консоль строку "Скасування входу";
// - для всіх інших логінів показати користувачу alert з текстом "Такий користувач не існує"
// Пароль для admin перевірити так:
// - якщо ввдено "12345" - "Адмін зайшов успішно"
//     - у всіх інших вимпадках показати alert "Невірний пароль";

// const userName = prompt(`username?`);
// if (userName === `admin`) {
//     const password = prompt(`password?`);
//     if (!password) {
//         console.log("Скасування входу");
//     } else {
//         // only if password exists
//         if (password === "12345") {
//             console.log("Адмін зайшов успішно");
//         } else {
//             alert("Невірний пароль");
//         }
//     }
// } else {
//     alert("Такий користувач не існує");
// }


// створити скрипт для виведення годин і хвилин в консолі у форматі строки: "14 ч. 26 мин.".
//  Якщо значення в змінній "minutes" дорівнює "0", то виводити строку "14 ч." без хвилин.

// const hours = 14;
// const minutes = 21;

// let timestring = !minutes
//     ? `${hours} ч.`
//     : `${hours} ч. ${minutes} мин.`;

// another option

// let timestring = `${hours} hrs. ${!minutes ? ``: minutes + "min."}`

// another option

// timestring = `${hours} ч.`;
// if (minutes) {
//     timestring += `${minutes} мин.`;
// }

// console.log(`timestring`, timestring);


// скрипт має виводити в консоль `Positive number` якщо користувач ввів в консоль число більше нуля.
// Якщо введений нуль  - вивести `Zero`
// На вводі значення в консоль менше нуля - `Negative number`
// Запитати тричі в циклі, спростити за модливості

// const userInput = prompt("Введіть число");
// if (userInput < 0) {
//     console.log(`Negative number`);
// } else if (userInput > 0) {
//     console.log(`Positive number`);
// } else {
//     console.log(`Zero`);
// }

// for (let i = 0; i < 3; i++){
//     const userInput = prompt("Введіть число");
// if (userInput < 0) {
//     console.log(`Negative number`);
// } else if (userInput > 0) {
//     console.log(`Positive number`);
// } else {
//     console.log(`Zero`);
// }
// }

// another option

// for (let i = 0; i < 3; i++){
//     const userInput = prompt("Введіть число");
// if (userInput < 0) {
//     console.log(`Negative number`);
//     continue;
// }
// if (userInput > 0) {
//     console.log(`Positive number`);
//     continue;
// }
// console.log(`Zero`);

// }


// написати скрипт, який перевіряє чи закінчується значення змінної link символом /
// якщо ні, то додати даний символ в інці `Link`

// let lint = `https://my-site.com/about`;

// if (!link.endsWith(`/`)) {
//     link += `/`;
// }

// another option

// if (link.charAt(link.length - 1) === `/`) {
    
// }

// console.log(`Link`, link);


// написати скрипт, що перевіряє чи закінчується значення змінної `link` символом`/`
// якщо ні - то додати, але лише у випадку коли у занчення `link` є підстрочка `my-site`

// let link = `https://somesite.com/about`
// if (!link.endsWith(`/`) && link.includes(`my-site`)) {
//     link += `/`;
// }

// option

// let isEndWithSlash = !link.endsWith(`/`);
// let includesMySite = link.includes(`my-site`);

// if (isEndWithSlash && includesMySite) {}

// console.log(`link`, link);




// рефакторинг за допомогою тернарки

// let link = `https://somesite.com/about`
// if (!link.endsWith(`/`) && link.includes(`my-site`)) {
//     link += `/`;
// }

// link += !link.endsWith(`/`) && link.includes(`my-site`)
//     ? `/`
//     : ``;


// console.log(`link`, link);



// скрипт має виводити в консоль строку в залежності від значення змінної `hours`.
//     Якщо `hours`:
// - менше 17 - вивести `Pending``
// - в проміжку між 17 до 24 (включно) вивести строку ˜Expires soon`
// - більше 24, вивести строку з помилкою `Expired`

// const hours = 10;

// if (hours < 17) {
//     console.log(`Pending`);
// } else if (hours >= 17 && hours <= 14) {
//     console.warn(`Expires soon`)
// } else {
//     console.error(`Expired`);
// }


// const daysTillDeadline = 0;

// switch (daysTillDeadline) {
//     case 0:
//         console.error(`Deadline is TODAY`);
//         break;
//     case 1:
//         console.warn(`Deadline is tomorrow`);
//         break;
//     case 2:
//         console.log(`2 days before deadline`);
//         break;
    
//     default:
//         console.log(`Relax deadline is not there`);
//         break;
// }

// const max = 100;
// const min = 20;

// for (let index = min; index >= 100; index++){
//     if (index % 5 === 0) {
//         console.log(index);
//     }
// }

// option
// for (let index = min; index >= 100; index += 5){
//         console.log(index);
// }