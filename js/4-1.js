
// callback function

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// }

// const fnB = function (number) {
//     console.log("This is log when invoke fnB", number);
// }

// fnA("qwerty", fnB);


// const doMath = function (a, b, callback) {
//     const result = callback(a.b);
// }

// console.log(result);

// const add = function (x, y) {
//     return x + y;
// }

// const sub = function (x, y) {
//     return x - y;
// }

// doMath(2, 3, add);

// doMath(10, 8, sub);


// op2 (inline function)

// doMath(2, 3, function (x, y) {
//     x + y;
// });

// doMath(10, 8, function (x, y) {
//     x - y;
// })

/*
отложненный вызов: регистрация событий
*/

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
    console.log("Click on the button");
}

buttonRef.addEventListener('click', handleBtnClick);

function addEventListener (eventType, callback) {
    if (eventType == event) {
        callback();
    }
}

/*
отложенный вызов: геолокация
*/

const onGetPositionSuccess = function (position) {
    console.log(position);
}

const onGetPositionError = function (error) {
    console.log(error);
}


window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);

/*
отложенный вызов: интервалы
*/

// const callback = function () {
//     console.log("Через 3 секунды после коллбека таймаута");
// };

// console.log("В коде перед таймаутом");

// setTimeout(callback, 2000);

// console.log("В коде после таймаута");


/*
Отложенный вызов http запрос
API URL www.fuckmoskal.ua
*/

// const onRequestSuccess = function (respons) {
//     console.log("Вызов функции onRequestSuccess после успешного ответа с бекенда");
//     console.log(response);
// }

// fetch("www.fuckmoskal.ua")
//     .then(res => res.json())
//     .then(onRequestSuccess);


/*
фильтр
*/

const filter = function (array, test) {
    
    const filteredArray = [];
    
    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

// 1. надо передеать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетвояет условию, то функция вернет true
// 4. если элемент массива НЕ удовлетвояет условию, то функция вернет false

const callback1 = function (value) {
    value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback1);

console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2), 

console.log(r2);


const fruits = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grape', quantuty: 150, isFresh: false },
    { name:'bananas', quantity: 100, isFresh: true},
]

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getFruitsWithQuantity), 

    console.log(r3);


// Замыкание

const fnA = function (params) {
   
    const innerVariable = 'значение внутренней переменноф функции fnA';

    const innerFunction = function () {
        console.log('это вызов innerFunction');
    }

    return innerFunction;
}

const fnB = fnA();

console.log(fnB);



// поваренок

const makeDish = function (shefName, dish) {
    console.log(`${shefName} готовит ${dish}`);
}

makeDish("Mango", "пирожок");

makeDish("Poly", "суп");

const makeShef = function (name) {
    const makeDish = function (dish) {
        console.log(`${name} готовит ${dish}`);
    }
}

cons mango = makeShef("Mango");


// округлятор

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

function rounder(places) {
    return function (num) {
        return (Number(num.toFixed(places)));
    }
}

const rounder2 = rounder(2);

const rounder3 = rounder(3);

rounder2(floatingPoint);
rounder3(floatingPoint);


// приватныё данныё и функции

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            salary += amount;;
        },
        lower(amount) {
            salary -= amount;;
        },
        current() {
            return `текущая зарплата ${employeeName} - ${salary}`
        },
    }
}


const salaryManager = salaryManagerFactory("Mango", 5000);

console.log(salaryManager);

// стрілочні функції

const add = function (a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}

const addArrow = (a, b, c) => {
     console.log(a, b, c);
    return a + b + c;
}

console.log(add(5, 10, 15));


const addArrow = (a, b, c) => {
    return a + b + c;
}

is ident

const addArrow = (a, b, c) => a + b + c;


const fnA = function () {
    return {
        a = 5,
    }
}

console.log(fnA());


const arrofnA = () => ({ arrowA: A });
    


console.log(arrowFnA());


const onGetPositionSuccess = (position) => {
    console.log(position);
}

const onGetPositionError = (error) => {
    console.log(error);
}


window.navigator.geolocation.getCurrentPosition(
    onGetPositionSuccess,
    onGetPositionError,
);



const filter = (array, test) => {
    
    const filteredArray = [];
    
    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
}

const callback1 = function (value) {
    value >= 3;
}

const r1 = filter([1, 2, 3, 4, 5], callback1);

console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2), 

console.log(r2);


const fruits = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grape', quantuty: 150, isFresh: false },
    { name:'bananas', quantity: 100, isFresh: true},
]

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
}

const r3 = filter(fruits, getFruitsWithQuantity), 

    console.log(r3);


    стелочные функции

const add = (a, b) => {
    return a + b;
}
    
console.log(add(2, 3));


const greet = (){
    console.log("Hello World!");
}

greet();


// explicit and implicit return

const add = (a, b) => {
    return a + b;
}

const add = (a, b) => a + b;

console.log(add(2, 3));


// псевдомассив arguments 

const add = (...args) => {
    console.log(args);
};

add(2, 3, 4, 5, 6, 7);


// контекст стрелки 

const showThis = () => {
    console.log("This in showThis: ", this);
}

showThis(); //This in showThis: window

const user = { name: "Mango" };
user.showContext = showThis;

user.showContext(); //This in showThis: window



const user = {
    fullName: "Mango",
    showName() {
        console.log("this: ", this);
        console.log("this.fullName: ", this.fullName);

        const inner = () => {
            console.log("this in inner: ", this.inner);
        }

        inner();
    }
}

user.showName();

/*
стрелки как методы объекта
*/

const user = {
    fullName: "Mango",
    showName= function() {
        console.log("this: ", this);
        console.log("this.fullName: ", this.fullName);
    }
}

user.ShowName();

/*
еще разок стрелка как метод объкта
*/

const objA = {
    x =5,
    showX() {
        console.log("this in objA.showThis: ", this);
        console.log(this.x);

        const objB = {
            y = 10,
            // shit 
            showThis = () => {
                console.log("this in objB.showThis: ", this);
            }
        }

    objB.showThis();
    }
}
objA.showX();