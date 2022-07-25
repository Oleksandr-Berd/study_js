
// methods

// const playlist = {
//     name: "qwerty",
//     rating: 5,
//     tracks: ["1", "2", "3"],
    
//     changeName(newName){
//         name = newName;
//     },
//     addTrack(track){
//     this.tracks.push(track);
// },
// updateRating(newRating){
//     this.rating = newRating;
// },
//     getTrackCount () {
//     return this.tracks.length;
//     },
// }

// playlist.changeName("new name");

// playlist.addTrack("new track");

// playlist.updateRating("new rating");

// console.log(playlist);



// iteration

// const feedback {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }

// let totalFeedback = 0;
// const keys = Object.keys(feedback);



// for (let key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log("totalFeedback: ", totalFeedback);


// other option

// const values = object.values(feedback);

// console.log(values);

// for (value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log("totalFeedback: ", totalFeedback);


// const friends = [
//     { name: "Mango", online: false },
//     { name: "Kiwi", online: true },
//     { name: "Poly", online: true },
//     { name: "Ajax", oline: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friends.newprop = 555;
// }

// console.table(friends);

// шукаємо друга за імʼям

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend)
    
//         if (friend.name === friendName) {
//             return "Find!!!";
//         }
//     }

//     return "Didn't find((";
// }

// з масиву друзів отимати всі їх імена

// const getAllNames = function (allFriends) {

//     const names = [];
    
//     for (const friend of allFriends) {
//         console.log(friend.name);
        
//         names.push(friend.name);
//     }
    
//     return names;
// }

// console.log(getAllNames(friends));


// отримаємо тільки тих друзів, які онлайн

// const getOnlineFriens = function (allFriends) {
    
//     onlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// }


// отримати всіх друзів, які оффлайн

// const getOfflineFriends = function (allFriends) {
    
//     const offlineFriends = [];
    
//     for (const friend of allFriends) {
//         console.log(friend.online)
        
//         if (!friend.online) {
            
//             offlineFriends.push(friend);
//         }
//     }

//     return offlineFriends;
// };

// console.log(getOfflineFriends(friend));

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [];
//         offline: [];
//     }

//     for (const friend of allFriends) {
        
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue
//         } 
//             friendsByStatus.offline.push(friend);
       
//     }

//     return friendsByStatus;
// }


// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// }

// console.log(Object.keys(x).length);


// const cart = {
//     items =[],
//     getItems =[] { },
//     add(product){ },
//     remove(productName){ },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity(productName){ }
//     decreaseQuantity(productName){ }
// }

// console.table(cart.getItems());

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 50 });
// cart.add({ name: "lemon", price: 50 });
// cart.add({ name: "strawberry", price: 50 });


const contentA = {
    type: "movie",
    name: "Iron Man 4.5",
    reting: null,
}

const contentB = {
    type: "episode",
    name: "The Walking Dead S1 E4",
    tv_rating: null,
}

const contentC = {
    type: "actor",
    name: "Will Smith",
    age: 42,
}

// function setRating(conten, rating) {
    
//     const ratingKey = content.type === "movie" ? "rating" : "tv_rating";
    
//     content.[ratingKey] = rating;
// }


const config = {
    movie: "rating",
    episode: "tv_rating",
}

function setRating(conten, rating) {
    
    const ratingKey = config[content.type];

    if (!ratingKey) {
        console.warn("actor have no rating");
        return;
    }
    
    content.[ratingKey] = rating;
}


setRating(contentA, "PG13");
setRating(contentB, "R");
setRating(contentC, "R");

console.log("contentA: ", contentA);

console.log("contentB: ",contentB);

console.log("contentC: ", contentC;


// базові операції з обʼєктами 

const user = {
    name: "Simon",
    age: 25,
    hobby: "swimming",
    isPremium: true,
    addNewKey(keyName, keyValue) {
        this[keyName] = keyValue;
    }
}

// додасть нове властивість 'mood' із знааченням "happy" 

user.mood = "happy";
op2
user["mood"] = "happy";

// замінити значення "hobby" на "birdwatching"

user.hobby = "birdwatching";
v2
user["hobby"] = "birdwatching";


// замінити значення premium на false 

user.isPremium = false;
op2
user.isPremium = !user.isPremium;


// виведе все що знаходиться всередині "user" в форматі "ключ: значення"
// використвоючи Object.keys() + loop for...of  

const userKeys = Object.keys(user);

console.log("userKeys", userKeys);

for (const key of userKeys) {
    console.log(`${key}:${user[key]} `);
}

/*написати функцію, яка буде додавати до обʼєкта "user" передану в аргументах 
властивість та її значення
*/

const addNewKey = function (newKeyName, newKeyValue) {
    user[newKeyName] = newKeyValue;
}

addNewKey("country", "US");

// op2 via method 

user.addNewKey("city", "NY");

// видалити ключ hobby із обʼєкта 

delete user.hobby;
// op2 
delete user["hobby"];

console.log("user", user);


/*
обʼєкт "order", який містить послуги одного замовлення на автосервісі
у форматі (послугаЖ ціна). Написати код для виводу суми всього замовлення
Якщо обʼєкт пустий, результат має бути 0
*/

const order = {
    carWash: 100,
    oilChange: 450,
    tyreRepair: 235,
}

const values = Object.values(order);

let total = 0;

for (const price of values) {
    total += price;
}

// op2 via function 

function getOrderTotal(order) {

    const values = Object.values(order);

    let total = 0;

for (const price of values) {
    total += price;
}
    return total;
}

console.log("Total: ", total);

console.log("Total from fn: ", getOrderTotal(order));

const emptyOrder = {};

onsole.log("empty total from fn: ", getOrderTotal(emptyOrder));


/*
Написати функцію "getPriceOfStones(storage, stoneName)", що отримує дані
про замаси на складі (у вигляді масиву обʼєктів) і потрібну назву товару.
Функція має для заданого каменя повертати загалбну вартість запасів 
на складі - ціна з урахуванням кількості.
Якщо камінь не знайдено - повертати null і кидати помилку в консоль.
Якщо камінь є в реєстрі, але закінчився (quantity: 0) - повертати 0 і кидати warning
*/


/**
 * 
 * @param {Object[]} storage 
 * @param {string} stoneName 
 */

function getPriceOfStones(storage, stoneName) {
    // 1. знайти потрібний товар 

    let ourStone = null;

    for (const item of storage) {
        if (item.name === stoneName) {
            ourStone = item;
            break; //знайшли потрібне
      };
    }

    if (!ourStone) {
        console.error("Not found!");
        return null;
    }

    if (!totalPrice) {
        console.warn("Not enough stones");
        return null;
    }

    console.log("ourStone: ", ourStone);
    
    //2. підрахувати загальну вартість 

    const totalPrice = ourStone.price * ourStone.quantity;

    

    return totalPrice;
}

const storageContent = [
    { name: "Emerald", price: 1300, quantity: 4, };
    { name: "Diamand", price: 2700, quantity: 3,};
    { name: "Sapphire", price: 900, quantity: 7 };
    { name: "Pearl", price: 200, quantity: 0 };
]


//виклик функції


console.log("Total price: ", totalPrice, getPriceOfStones (storageContent, "Diamand"));
;



/* написати скипт для персонального кабінету інтенет-банкінга.
Є головний обʼкт "account", в який необхідно додати методи роботи
з балансом та історією трансакцій.
Типів транзакцій два: можна покласти або зняти з рахунку.
*/

const TRANSACTIONS = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
}

//кожна транзакція це обʼєкт з полями id, type, amount

const account = {
    //поточний баланс
    balance = 0;
}

/**
 * повертає поточний стан балансу
 * @returns {number}
 */

getBalance(){
    return this.balance;
 }

/**
 * створює і повертає нову транзакцію за заданим типом і сумою
 * @param {number} amount
 * @param {string} type
 * 
 * @returns {{id: number, amount: number, type: string}};
 */

createTransaction(amount, type){
    return {
        id: Math.round(Date.now() * Math.random()),
        type,
        amount,
    }
 }

/**
 * додає суму на баланс.
 * Створює в історії транзакцій (викликає для цього createTransaction)
 * @param {number} ammount сума яка буде додана на баланс
 */

deposit(amount){

    const transactions = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
    this.transactions.push(transaction);

    this.balance += amount;
}

/**
 * знміає суму з баланса.
 * Створює запис в історії транзакцій (викликає для цього createTransaction)
 * 
 * якщо недостатньо грошей - повертає null, пише ворнінг в консоль 
 * @param {number} ammount сума яка буде знята з баланса
 * @returns {???????}
 */

withdraw(amount){

    if (amount > this.balance) {
        console.warn("not enough fonds");
        return null;
    }

    const transactions = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
    this.transactions.push(transaction);

    this.balance -= amount;
}

/**  шукає транзакцію по заданому id.
Повертає null якщо id не знайдено
@param {number} id id транзакції
@returns {Object}
*/

getTransactionDetails(id){
    l
    et foundTransaction = null;
   
    for (const tr of this.transactions) {
        if (tr.id === id) {
            foundTransaction = tr;
            break;
        }
    }

    return foundTransaction;
 }

/**
 * повертає загальну суму транзакцій в історіі
 * @param {string} id
 * @returns {number}
 */

getTransactionTotal(type){

    let total = 0;

    for (const tr of this.transactions) {
        if (tr.type === type) {
            total += tr.amount;
        }
    }
    return total;
 }


//test
console.log("1. getBalance", account.getBalance());

account.deposit(1000);
console.log("2. getBalance + 1000", account.getBalance());
