
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

    console.table(players);

//получаем массив имен всех игроков

const playerNames = players.map(player => player.name);
console.log("Players name", playerNames);

const playerId = players.map(player => player.id);
console.log("Players id", playerId);


// увеличеваем колличество поинтов кажого игрока на 10 %

const updatedPlayers = players.map(player ({
        ...player,
        points: player.point * 1.1;
}))
    

// увеличиваем кол-во часов игрока по id

playerIdToUpdate = "player-3";

const updatedPlayers = players.map(player => {
    console.log(player.id);
    if (playerIdToUpdate === player.id) {
        console.log("We found him for updating!");
        return "It will be updated object";
    }
    console.log(player.id);
    // return "It will be an old object";
    return {
        ...player,
        timePlayed = player.timePlayed + 100,
    }
   
    
}
    return player;
)

op2

const updatedPlayers = players.map(player => 
    playerIdToUpdate === player.id
        ? {
            ...player,
            timePlayed = player.timePlayed + 100;
        }
        : player,
        
);
console.table(updatedPlayers);


// filter

const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = (number => {
    console.log(number);

    return number > 15;
})

op2

const filteredNumbers = numbers.filter(number => number > 15);

console.log(filteredNumbers);


const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

    console.table(players);


    // get online players

const onlinePlayers = players.filter(player => player.online);
console.table(onlinePlayers);

// get only offline players 

const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

// get list of hardcore players with the time more than 250 

const hardCorePlayers = players.filter(player => player.timePlayed > 250);
console.table(hardCorePlayers);


// find 

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number);

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

// searching for player by id 

const playerIdToFind = "Player-3";

const playerWithId = players.find(player => player.id === playerIdToFind);
console.log(playerWithId);

op2(with destructure)

const playerWithId = players.find( ({ id }) => id === playerIdToFind);
console.log(playerWithId);

another case

const findPlayerById = (allPlayer, playerId) => {
    allPlayer.find(player => player.id === playerId);
}

op2 with deconstr

const findPlayerById = (allPlayer, playerId) => {
    allPlayer.find(({ id }) => id === playerId);
}




// searching for player by name 

const playerNameToFind = "Poly";

const playerWithName = players.find(player => player.name === playerNameToFind);
console.log(playerWithName);

// every-some 

const numbers = [5, 10, 15, 20, 25];

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],


// array ptototype every 

const isAllOnline = players.every(player => player.online);

console.log("isAllOnline: ", isAllOnline);

// array prototype some 

const isAnyOnline = players.some(player => player.online);

console.log("Is any online: ", isAnyOnline);

const anyHardCorePlayer = players.some(player => player.timePlayed > 400);
console.log("Any ahrd core player: ", anyharCorePlayer);


// array prototype reduce 

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0); // 0 is starting def for acc
console.log(total);

/* 
description
accumulator = 0 -> number = 5 -> return 0 + 5:
acc = 5 -> number = 10 -> return 5 + 10:
acc = 15 -> number = 15 -> return 15 + 15:
acc = 30 -> number = 20 -> return 30 + 20:
acc = 50 -> number = 25 -> return 50 + 25:


/*
to count total salary
*/

const salary = {
    mango = 100,
    poly = 50,
    ajax = 150,
};

const totalSalary = Object.values(salary).reduce(
    (total, value) => total + value,
    0,
);
console.log(totalSalay);


// to count total ammount of hours

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

const totalTimePlayed = players.reduce((totalTime, player) =>
    totalTime + player.timePlayed,
    0,
)


// to count total good's ammount of cart 


const cart = [
    { label: "Apples", price: 100, quantity: 2 },
    { label: "Bananas", price: 120, quantity: 3 },
      { label: "Lemons", price: 70, quantity: 4 },
]

const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

// with destrcut (because more than one value)

const totalAmount = cart.reduce((total, { price, quantity }) =>
    total + price * quantity,
    0);

console.log(totalAmount);

// to collect all tags from tweets

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((tags, tweet) => {
    tags.push(...tweet.tags);

    return tags;
}, []);
 
op2

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags],
[]);

console.table(allTags);

// statistics of tags

const tagStats = tweets.reduce((acc, tag) => {

    if (acc[tag]) {
        acc[tag] += 1;

        return acc;
    }

    acc[tag] = 1;
    
    return acc
}, {})
 
op2 rewrite

const tagStats = tweets.reduce((acc, tag) => {

    if (acc[tag]) {

        return {
            ...acc,
            [tag]: acc.tag + 1;
        }
    }
    
    return {
        ...acc,
        [tag] = 1
    }
}, {})

op3 ternar

const tagStats = tweets.reduce((acc, tag) => {
    
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1
    }
}, {})


// логика - если свойства с таким ключем tag есть, то увеличить его на один
// если свойства нет с таким ключем что с tag, сделать и записать 1 


// array prototype sort
// default sort by ascending (приводит элементы к строке и сортирует по Unicode)

const numbers = [1, 9, 6, 2, 3];
numbers.sort();
console.log(numbers);


numbers.sort((curEl, nextEl) => {
    return curEl - nextEl;
});
console.log(numbers);

// sort descending

numbers.sort((curEl, nextEl) => {
    return nextEl - curEl;
});
console.log(numbers);

/*
как сделать копию массива что бы не сортировать оригинал
- Array.prototype.slice
- операция spread
*/

const ascSortedNumbers = [...numbers].sort((a, b) => { a - b });

const descSortedNumbers = [...numbers].sort((a, b) => { b - a });


// кастомная сортировка сложных типов

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

// sort by played time

const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
   return nextPlayer.timePlayed - prevPlayer.timePlayed;
})

console.log(sortedByBestPlayers);


// sort by name, особенность так как если просто отонимать строки то будет NaN, поэтому делаем сравнение, что бы были number

const byName = [...players].sort((a, b) => {
    
    const result = a.name[0] > b.name[0];

    if (result) {
        return -1
    }
    if (!result) {
        return 1;
    }
});
console.table(byName);


/*
array prototype flat(depth)
по умолчанию разглаживает на 1
разглаживает массив до указанной глубины
*/

const array = [1, 2, [4.[5]], [6, [7, 8, [9]]]];

console.log(array.flat());

/*
array prototype flat.map(callback)
по умолчанию разглаживает на 1
разглаживает массив до указанной глубины
*/

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tagStats = tweets.reduce((acc, tag) => {
    
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1
//     }
// }, {})

const tags = tweets.map(t => t.tags).flat();

op2

const tags = tweets.flatMap(t => t.tags);

console.log(tags);


// цепочки вызовов chaining

const numbers = [1, 5, 2, 4, 3];

const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo);

const multByThree = greaterThanTwo.map(num => num * 3);
console.log(multByThree);

const sorted = multbyThree.sort((a, b) => a - b); //sort by ascent
console.log(sorted);

// chain of previous three

const sorted = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);

console.log(sorted);
    
/*
sort who online by rang
- in the begining flitering
- than sorting
*/

const players = [
    { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
    { id: "id-2", tag: "Poly", isOnline: false, rank: 600 },
    { id: "id-3", tag: "Ajax", isOnline: true, rank: 100 },
    { id: "id-4", tag: "Kiwi", isOnline: true, rank: 400 },
]

const onlineAndSorted = players
    .filter(player => player.isOnline)
    .sort((playerA, playerB) => playerA.rank - playerB.rank);

console.log(onlineAndSorted);


/*
chaining in object's method as jquery
*/

const element = {
    class: "",
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },
    toggleHovered() {
        this.hovered = !this.hovered;

        return this;
    },
};

element.toggleHovered().changeClass("open");
console.log(element);


//lodash library

console.dir(_);

// method isEmpty()

console.log(_.isEmpty({})); // true 'cause object is empty

console.log(_.isEmpty({ a: 1 })); // false


// method get

const user = {
    name: "Mango",
    location: {
        coords: [1, 2],
        city: "Lviv",
    },
};

console.log(_.get(user, "location.city"));

console.log(user?.location?.city); // check for


// method union() - unite onli unique elements

console.log(_.union[1, 2, 3], [3, 4, 5]);


// range( [start], end, [step])

console.log(_.range(1, 6, 2));


// sortBy()

const users = [
    { user: "fred", age: 48 },
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "barney", age: 34 },
    
]

console.log(_.sortBy(users, user => user.age));

console.log(_.sortBy(users, ["user", "age"])); // sort by couple fields


// sum() and sumBy()

console.log(_.sum[1, 2, 3, 4, 5]); //return sum

const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
    { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
    { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
    { id: "player-5", name:"Chelsy", timePlayed: 80, points: 48, online: true},
],

    console.log(_.sumBy(players, player => player.timePlayed));


    /*
    uniq() and uniqBy()
    sortedUniq() and sortedUniqBy()
*/

/* min() and max()
minBy() and maxBy()
*/

console.log(_.minBy(players, player => player.timePlayed));


// camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()

console.log(_.kebabCase('a b c')); // a-b-c

