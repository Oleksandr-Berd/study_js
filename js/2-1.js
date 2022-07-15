
// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];

// console.table(friends);

// // console.log(friends[2]);

// friends[1] = `qwerty`;

// console.log(friends);

// const lastIndex = friends.length - 1;

// console.log(lastIndex);

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// const a = [1, 2, 3];
// const b = a;

// console.log(`a`, a);
// console.log(`b`, b);

// a[0] = 500;

// console.log(`a`, a);
// console.log(`b`, b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);


// const friends = [`Mango`, `Kiwi`, `Poly`, `Ajax`];
// console.table(friends);

// const lastIndex = friends.length - 1;

// for (let i = 0; i < lastIndex; i += 1){
//     friends[i] += `-1`;
// }

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);
// }


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


// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log(`even!!!`);

//         total += numbers[i];
// }
// }

// for (number of numbers) {
//     console.log(number);
//     if (number % 2 === 0) {
//         console.log(`even!!!`);

//         total += number;
//     }
// }
// console.log(`total: `, total);


// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log(`this iteration should be skiped`, number);
//         continue;
//     }
//     console.log(`${number} - even!!!`);
//     total += number;
// }

// console.log(`total: `, total);

// !!!find login!!!

const logins = [`MmIkLuha`, `vSevOlodYch`, `jKnJJkl`, `jHndslJk`];
const loginToFind = `vSevOlodYch`;
// let message = `user ${loginToFind} is not found`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
  
//     console.log(`login: `, login);
//     if (login === loginToFind) {
//         message = `user ${loginToFind} is found`;
//         break;
//     }
// }

// for (const login of logins) {
//     console.log(`Login: `, login);
//     console.log(`${loginToFind} === ${login}: `, loginToFind === login);

//     if (login === loginToFind) {
//         console.log(`Even!!!`);
//         message = `user ${loginToFind} is found`;
//         break;
//     }
// }

// console.log(message); 
// const message = logins.includes(loginToFind) ? `Yes, ${loginToFind} is found}` : `No`;

// console.log(message);

//!!! scrip to find the lowes number in th array

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (number of numbers) {
//     console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(`smallestNumber: `, smallestNumber);


//!!! write scrip wich unite all elements of array in one string

// const friends = [`Vsevolodich`, `Valia`, `Jorjevich`, `Badagaev`];
// let string = ``;

// for (const friend of friends) {
//     string += friend + `,`;
// }
// console.log(string.slice(0, string.length - 1));

// const string = friends.join(`---`);
// console.log(string);

// const string = `JavaScript`;
// const letters = string.split(``);
// let invertedString = ``;

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log(`letter in a lower register!!! - `, letter);

//         invertedString += letter.toUpperCase();
//     } else {
//         console.log(`letter in a upper register!!! -`, letter);
//         invertedString += letter.toLowerCase();
//     }
// invertedString +=
//     letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLowerCase();

// }


// console.log(`invertedString: `, invertedString);


// const title = `Top 10 benefits of React framework`;
// const normilizedTitle = title.toLowerCase();
// console.log(normilizedTitle);

// const words = normilizedTitle.split(` `);

// console.log(words);

// const slug = words.join(`-`);
// console.log(slug);

// const slug1 = title.toLowerCase().split(` `).join(`-`);
// console.log(slug1);


// sum of all elemnts of two arrays
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// const cards = [
//     `Card1`,
//     `Card2`,
//     `Card3`,
//     `Card4`,
//     `Card5`,
// ]
// console.table(cards);

// const cardToRemove = `Card3`;
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);

// const cardToInsert = `Card6`;
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// 1.
// створити масив з елементами "Jazz" і "Blues"
// додати "Rock" в кінець масиву
// вивести в консоль перший елемент масиву(не видаляючи його)
// вивести в консоль останній елемент масиву.Має працювати для будь - якої довжини.
// видалити з масиву перший елемент і вивести його в консоль
// додати "Country" і "Reggy" в початок масиву(зберегти порядок)

// const genres = ["Jazz", "Blues"];

// genres.push("Rock");

// console.log(genres[0]);

// const indexLastElement = genres.lenght - 1;
// console.log(genres[indexLastElement]);

// const firstElement = genres.shift();
// console.log(firstElement);

// genres.unshift("Country", "Reggy");
// console.log({ genres });

// 2.
// написати скрипт для обчислення пллощі прямокутника зі сторонами, довжину яких
// отримаємо у змінній "sides" у вигляді строки.
// Значення гарантовано розділенні одним пробілом.

// const sides = "7 10";
// const sidesSeparates = sides.split(" ");

// const area = sidesSeparated[0] * sidesSeparated[2];

// console.log({ sidesSeparated, area });


// 3.
// написати скрипт для перебору масиву "fruits" циклом for
// для кожного елемента вивести в консоль строку формата "номер елемента: значення елемента "
// нумерація має починатися з 1

// const fruits = ["apple", "grape", "peach", "banana", "lemon"];
// const fruitsToIgnore = ["banana", "lemon"];

// for (let i = 0; i < fruits.length; i++){
//     const item = fruits[i];
//     if (fruitsToIgnore.includes(item)) {
//         continue;
//     }

//     console.log(`${i + 1}: ${item}`);
// }

// op2

// const filtered = fruits.filter((item) => fruitsToIgnore.includes(item));

// console.log(filtered);


// написати скрипт, що виводить в консоль імʼя і телефон користувачів.
// У змінних "names" і "phones" зберігаються строки імен і телефонних номерів, розділені комами.
// Порядок імен відповідає порядку номерів.
// Кількість імен та телефонів гарантовано однакова.
// Обрати зручний формат

// const names = "Jacob,Wiliam,Solomon,Nicolas";
// const phones = "89001234567,89001112233,890055566300";

// const splitNames = names.split(`,`);
// const splitPhones = phones.split(`,`);

// for (let i = 0; i < splitNames.length; i++){
//     const name = splitNames[i];
//     const phone = splitPhones[i];

//     console.log(`Name: ${name}`, `Phone: ${phone}`);
// }


// написати скрипт, що виводить в консоль задану фразу без першого і остннього слів.
// Фінальна строка не має починатись чи закінчуватись пробілом.
// Скрипт має працюват для будь - якої строки.

// const phrase = `Welcome to the bright future`;

// const words = phrase.split(` `);
// words.pop;
// words.shift;

// cutPhrase = words.join(` `);


// console.log({ cutPhrase });

// op2

// const firstSpace = phrase.indexOf(` `);
// const lastSpace = phrase.lastIndexOf(` `);

// const cutPhrase = phrase.slice(firstSpace + 1, lastSpace);

// console.log({ cutPhrase });



// написати скрип, який "розверне" строку(зворотній порядок літер) і виведе в консоль.
// Три варіанти - цикл for (без масивів), цикл for of + масиви, без циклів


// const phrase = `Welcome to the bright future`;

// let reversed = ``;

// for (let i = phrase.length - 1; i >= 0, i--){
//     const item = phrase.charAt(i);

//     reversed += item;
// }

// const reserved =

//     console.log(`reserved:`, reserved);

// op 2

// const phrase = `Welcome to the bright future`;

// const chars = phrase.split(``);

// const reversedArray = [];

// for (const item of chars) {
//     reversedArray.unshift(item);
// }

// const reversed = reversedArray.join(``);

// console.log(`reverved:`, reverved);
    
    
// op 3

// const chars = phrase.split(``);
// const reversed = chars.reverse().join(``);

// console.log(`reversed:`, reversed);
    


// написати скрипт пошуку найменшого числа в масиві.

// const numbers = [2, 17, 94, 1, 23, 27];

// let min = Math.min(...numbers);

// console.log(`min is ${min}`, numbers);

// op 2

// let min = numbers[0];

// for (const number of numbers) {
//     if (min < number) {
//         min = number;
//     }
// }

// console.log(`min is ${min}`, numbers);

// op 2.1

// let min = numbers[0];

// for (const number of numbers) {
    
//     min = number < min ? number : min;
// }
// console.log(`min is ${min}`, numbers);

// op 2.2

// let min = numbers[0];

// for (const number of numbers) {
    
//     min = Math.min(number, min);
// }
// console.log(`min is ${min}`, numbers);


написати скипт сортування масиву строк в алфавітному порядку

const langs = [`python`, `javascript`, `c++`, `haskel`, `php`, `ruby`, `ada`];

let isSorted;
do {

    console.log(`-------next iteration WHILE`);

    isSorted = true;

    for (let i = 0; i < langs.lenght - 1; i++) {
        console.log(langs);

        const current = langs[i];
        const next = langs[i + 1];

        console.log(`comparing ${current} and ${next}`)

        if (current > next) {
            console.log(`swapping!`);
            const temp = current;

            langs[i] = next;
            langs[i + 1] = temp;

            isSorted = false;
        }
    }
} while (!isSorted);
console.log(langs);