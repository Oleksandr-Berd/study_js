
// // const fn = function () {
// //     console.log(1);

// //     console.log(2);

// //     console.log(3);
// // }

// // console.log(`function's result: `, fn());

// // const cart = [54, 28, 105, 70, 92, 17, 120];
// // let total = 0;

// // console.log(cart.length);

// // for (let i = 0; i < cart.length; i += 1){
// //     console.log(cart[i]);

// //     total += cart[i];
// // }

// // for (const value of cart) {
// //     total += value;
// // }

// // console.log(`Total: `, total);

// // const findSmallestNumber = fucntion(numbers){
// //     let smallestNumber = numbers[0];

// // for (const number of numbers) {
// //     if (number > smallestNubmber);
// //     smallestNumber = number;
// // }
// // return smallestNumber;
// // }


// // const changeCase = function (string) {
// //     const letters = string.split(``);
// //     let invertertedString = ``;

// //     for (const letter of letters) {
// //         const isInLowerCase = letter === letter.toLowerCase();

// //         invertedString += isInLowerCase ? letter.toUpperCase : letter.toLowerCase;
// //     }

// //     return invertedString;
// // }


// // const slugify = function (string) {

// //     return string.toLowercase().split(` `).join(`-`);
// // }


// // const fn = function () {
// //     console.log(arguments);

// //     const arg = Array.from(arguments);

// //     console.log(args);

// //     for (const arg of arguments) {
// //         console.log(arg);
// //     }
// //  }

// // fn(1; 2; 3);
// // fn(1; 2; 3; 4; 5);
// // fn(1; 2; 3; 4; 5; 6; 7);


// // const fn = function (a, b, c, ...args) {
// //     console.log(`${a} ${b} ${c}`);
// //     console.log(args);

    
// //  }

// // fn(`hello`; 1; 2; 3);
// // fn(`alloha`; 1; 2; 3; 4; 5);
// // fn(`hi`; 1; 2; 3; 4; 5; 6; 7);


// // напищи функцію add для для додавання довільної кількості аргументів (чисел)
// // операція ...rest

// // const add = function (...args) {
// //     console.log(agrs);

// //     for (const arg of args) {
// //         total += arg;
// //     }
// //     return total;
// //  };

// // console.log(add(1, 2, 3));
// // console.log(add(1, 2, 3, , 4, 5, 6));

// // напиши функцію filterNumbers(array [,number1, ...]), яка першим аргументов приймає масив чисел;
// //  після першого аругемнта може бути довільна кількість інших аргументів(чисел);
// //  функція повинна повернути новий масив, в якому будуть тільки ті аргументи, починаючи з другого;
// //  для ских є аналог в оригінальному масиві.

// // const filterNumbers = function (array, ...args) {
// //     console.log(`array: `, array);
// //     console.log(`args: `, args);
// //     const uniqueElements = [];

// //     for (element of array) {
// //         if (args.includes(element)) {
// //             uniqueElement.push(element);
// //             console.log(`${element} є всюди!`);
// //         }
// //     }
// //     return uniqueElements;
// // }


// // створити функцію printContactsInfo(names, phones), яка виведе в консоль імʼя і телефон
// // користувача.В параметри name і phones очікуються строки імен і номерів, розділені комами.
// // Порядковий номер імені і номеру вказує на відповідність.
// // Кількість імен і номерів гарантовано однакова.


// // function prinContactsInfo(names = ``, phones = ``) {
// //     const arrayOfNames = names.split(`,`);
// //     const arrayOfPhones = phones.split(`,`);

// //     console.log(`arrayOfNames`, arrayOfNames);
// //     console.log(`arrayOgPhones`, arrayOfPhones);

// //     const noPhone = `no-phone`;

// //     for (let i = 0; i < arrayOfNames.length; i += 1){
// //         const aNames = arrayOfNames[i];
// //         const aPhones = arrayOfPhones[i];

// //         // opt1
// //         // console.log(`name: ${aName}; phone: ${aPhone ? aPhone : noPhone}`);

// //         //  opt2
// //         console.log(`name: ${aName}; phone: ${aPhone || noPhone}`);
// //     }
// // }
// //     printContactsInfo(
// //         `Jacob,William,Solomon,Nicolas`,
// //         `89001234567,89001112233,89005556677`,
// //     )


// // написати функцію `getRectangleArea(dimensions)` для обчислення площі прямокутника
// // зі сторонами, значення яких отримаємо в параметр `dimensions` у вигляді строки
// // Значення гарантовано розділені пробілом.


// // @param { string } sizes

// // /**
// //  * Calculates area of rectangle
// //  * 
// //  * @param {string} sizes 
// //  * @returns {number}
// //  */

// // function getRectanglArea(sizes) {
    
// //     const arrayOfSizes = sizes.split(` `);
// //     console.log(`arrayOfSizes`, arrayOfSizes);
    
// //     const calculatedArea = arrayOfSizes[0] * arrayOfSizes[1];

// //     return calculatedArea;
// // }

// // const area = getRectangArea(`8 11`);
// // console.log(`Rect area is ${area}`);



// // написати функцію`min (a, b)`, яка повертає найменше з чисел  `a` і`b`

// // function min(a, b) {
   
// //    return Math.min(a, b);
// // }

// // console.log( min(2, 5) );
// // console.log(min(3, -1) );
// // console.log(min(1, 1) );

// // // stack:
// // // - console.log() < 2
// // // - - min(2, 5) < 2
// // // - - - Math.min(1, 5) < 2



// // написати функцію `findLargestNumber(numbers)` яка повертає найбільше значення
// // із переданого масиву


// // function findLargestNumber(numbers = []) {
// //     // return Math.max(...numbers);

// //     opt 2

// //     let maxNumber = 0;

// //     for (const item of numbers) {
// //         console.log(item);

// //         maxNumber = Math.max(item, maxNumber);

// //         return maxNumber;
// //     }
// // }

// // console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// // console.log(findLargestNumber([49, 4, 7, 83, 12]));


// написати функцію `getAvarage()` що приймає будь - яку кількість аргументів
// і повертає їх середнє значення.Всі аргементи тільки числа

// function getAvarage() {
   
// // //    opt1 - arguments
// //     console.log(`argeument`, arguments);

// //     // early return
// //     if (arguments.length === 0) {
// //         console.warn(`no arguments are set`);
// //         return null;
// //     }
    
    
// //     console.log(`argument's lenght`, agruments.length);

// //     const arrayOfValues = Array.from(arguments);

// //     console.log(`arrayOfValues`, arrayOfValues);

// //     let total = 0;
// //     for (const number of arrayOfValues) {
// //         total += number;
// //     }

// //     return total / arrayOfValues.length;
// // }
    
    
// //     opt 2

// //     function getAvarageWithRest(...items) {
// //         console.log(`> rest into items:`, items);
// //         Math.max(...items);
// //     }

// // console.log(getAvarage(1, 2, 3, 4));
// // console.log(getAvarage(14, 8, 2));
// // console.log(getAvarage(27, 43, 2, 8, 36))

// // console.log(getAvarageWithRest(1, 45, 8));
// // console.log(getAvarageWithRest());


// // написати функцію `calcBMI(weight, height)` що розраховує і повертає
// // індекс маси тіла людини.Для цього необхідно поділити масу тіла людини в кг
// // на квадрат висоти людини в метрах.
// // Вага і зріст будуть передаватись у вигляді строк.Дробні числа можуть бути задані
// //     як `24.7` або`24,7`.тобто десятинний розділювач або крапка або кома.
// // Індекс маси необхідно округлити до однієї цифри після коми(до десятих).


// // //    op1
// // //     function convertStringToNumber(str = ``) {
// // //         const validString = str.replace(`,`, `.`);
// // //         return Number(validString);
// //     }
    
// //     function calcBMI(weight = ``, height = ``) {
// //         op2
// //         const convertStringToNumber = function (str = ``) {
// //         const validString = str.replace(`,`, `.`);
// //         return Number(validString);
       
// //         const validParam1 = convertStringToNumber(weight);
// //        const validParam2 = convertStringToNumber(height);
       
// //     console.log(validParam1, validParam2);

// //        result = validParam1 / Math.pow(validParam2, 2);

// //        return result.toFixed(1);
// //    }
    
// //     const bmi = calcBMI(`88,3`, `1.75`);
// //     console.log(`bmi`, bmi);

// //     /*
// //     stack:
// //    - calcBMI(`88,3`, `1.75`);
// //    - convertStringToNumber(88,3);
// //    - `88,3`.replace(`,`, `.`) => `88.3`;

// //     - convertStringToNumber(1.75);
// //    - `1.75`.replace(`,`, `.`) => `1.75`;
// //     /*


// написати функцію з колекцією навчальних курсів(додатик курс, видалили курс, проапдейдити курс)
    
// // 1 add course
// //     function addCourse(courseName = ``) {
        
// //         if (courses.includes(courseName)) {
// //             console.warn(`this course is already exists`);
// //             return;
// //         }
// //         courses.push(courseName);
// //     }
    
// //     const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `PostgreSQL`];

// //     console.log(`...addCourse`);
// //     addCourse(`Express`);
// //     console.log(courses);

// //     // при додаванні вже існуючого курсу (ex `CSS`) має вивести warning `такий курс вже існує`

//     // 2. remove course;

//     // const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `PostgreSQL`];

//     // console.log(`...removeCourse`);
//     // function removeCourse(courseName = ``) {
//     //     if (!courses.includes(courseName)) { 
//     //     console.warn(`course with the name ${courseName} isn't found`);
//     //     return;
//     // }
//     //     const indexOfCourse = courses.indexOf(courseName);

//     //     courses.splice(indexOfCourse, 1);
//     // }
    
//     // console.log(courses);

//     3. update course

//     const courses = [`HTML`, `CSS`, `JavaScript`, `React`, `PostgreSQL`];

//     console.log(`...updateCourse`);

//     function updateCourse(oldName = ``, newName = ``) {
//         const oldNameIndex = courses.indexOf(oldName);

//         courses[oldNameIndex] = newName;
//     }

