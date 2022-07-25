
// const numbers = [...[]];

// console.log(numbers);


// пошук самое маленької або великої температури

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps))


// сшиваємо в один масив

// const lastWeekTemps = [1, 2, 3];
// const currenTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currenTemps, ...nextWeekTemps];
// console.log(allTemps);


// розпилення обʼєктів

// const a = { x: 1, y: 2};
// const b = { x: 0, z: 3 };

// const c = Object.assign({x{5}}, a, b);

// const c = {
//     ...a,
//     ...b.
// }

// {
//     x: 5,
//     y: 2,
//     z: 3,    
// }


// const defaultSettings = {
//     theme: "light",
//     showNotifications: true,
//     hideSidebar: false,
// }

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// }

// const finalSettings{
//     ...defaultSettings,
//     ...userSettings,
// }

// console.log(finalSettings);


// деструктуризація

// const playlist = {
//     name: "My super playlist",
//     rating: 5,
//     tracks: [track - 1, track - 2, track - 3],
//     trackCount: 3,
// }

// const {
//     rating,
//     tracks: numberOfTracks = 0,
//     author = 555
// } = playlist; 


// глибока деструктуризація

// const profile = {
//     name: "Jack Gluck",
//     tag: "jcgk",
//     locayion: "Ocho Rios, Jamaica",
//     avatar: "http://twitter/1234.jpg,
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// }

// const { name, tag, location, avatar, stats: { followers, views, likes } } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);


// деструктуризація масивів

// const rgb = [250, 100, 80];

// const authors = {
//     kiwi = 4,
//     poly = 7,
//     ajax = 9,
//     mango = 6,
// };

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

// const ratings = Object.values(authors);

// console.log(ratings);

// console.log(Math.max(...ratings));


// const keys = Object.keys(authors);
// for (const key of keys) {
//     console.log(key);
//     console.log(authors[key]);
// }


// const entries = Object.entries(authors);
// for (const entrey of entries) {
    
//     const [name, rating] = entry;

//     const name = entry[0];
//     const rating = entry[1];
    
//     console.log(name, rating);
// }





// const rgb = [255, 100, 80]

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }


// операція rest (збір)

// const profile = {
//     name: "Jack Gluck",
//     tag: "jcgk",
//     locayion: "Ocho Rios, Jamaica",
//     avatar: "http://twitter/1234.jpg,
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// }

// const { name, tag, location, ...restProps } = profile;

// const restProps = {
//     avatar = profile.avatar;
//     stats = profile.stats;
// }


// патерн обʼєкт налаштувань

// const fn = function (params) { };

// fn ({

//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobby: [],
//     games: {},
//     rating: 6,
// })


// const showProfileInfo = function (userProfile) {
    
//     const { name, tag, location, avatar, stats: { followers, views, likes } } = userProfile;
    
//     console.log(name, tag, location, avatar, followers, views, likes);
// }

// const profile = {
//     name: "Jack Gluck",
//     tag: "jcgk",
//     locayion: "Ocho Rios, Jamaica",
//     avatar: "http://twitter/1234.jpg,
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     }
// }

// showProfileInfo(profile);



const cart = {
items =[],
getItems =[] {
    return this.items;
     },
add(product){

    console.table(this.items);
    for (const item of this.items) {
        
        if (item.name === product.name) {
            item.quantity += 1;
            return;
        }
    }

    const newProduct = {
        ...product,
        quantity = 1,
    }

    this.items.push(product);
},
remove(productName){
   
    const { item } = this;
   
    for (let i = 0; i <= items.length; i += 1){
        
        const item = item[i];
        console.log(item);

        if (productName === item.name) {
            console.log("Find particular product ", productName);
            console.log(i);

            items.splice("index: ", 1);
    }
    }
    
    // for (const item of this.items) {
    //     console.log(item);
    // }
    

     },
clear() {
    this.item = [];
 },


countTotalPrice() {
    const { items } = this;

    let total = 0;

    for (const {price, quantity} of items) {
        
        total += price * quantity;

        return total;
    }
 },

increaseQuantity(productName){ }
decreaseQuantity(productName){ }
}

console.log(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "grape", price: 60 });
cart.add({ name: "lemon", price: 60 });
cart.add({ name: "strawberry", price: 110 });

console.log(card.getItems());

cart.remove("apple");

cart.clear();
console.log(cart.getItems());

console.log("Total: ", countTotalPrice());


// Rapper

//destructuring

const testObject = {
    outerName ='i am a test',
    phone: 0952844818,
    innerObj: {
        innerName: 'I am inside',
    }
}

const { outerName, phone: outerPhone, innerObj: { innerName } } = testObj; // phone: outerPhone - пересвоение

// const outerPhone = testObj.phone;

const { outerName, ...newObj } = testObject;

console.log(outerName, outerPone, innerName);

console.log('new obj', newObj);


// with arrays

const testArray = [1, 45, 8, 42, 81];

const [firstElem, secondElem, ...newArray] = testArray;

console.log('array', firstElem, secondElem, newArray);


function foo({ username } = {}) {
    console.log(username);
}

foo(); //undefined
foo({}); //undefined
const obj = { username: 'test' };
foo(obj); //test

/* переписати функцію таким чином, щоб приймала один обʼєкт параметрів,
замість набору незалежних аргументів
*/

/**
 * @param {Object} param
 * @param {string} param.weight
 * @param {string} param.height
 * 
 * @return {number}
 */

function calcBMI(weight, height) {
    
    const numericWeight = Number(weight.replace(',', '.'));

    const numericHeight = Number(height.replace(',', '.'));

    return ((Number.weight / Number.height ** 2).toFixed(1));
}

// what now

console.log(calcBMI('88,3', '1.75'));
console.log(calcBMI('68,3', '1.65'));
console.log(calcBMI('118,3', '1.95'));

// wait for

console.log(
    calcBMI({
        weight: '88,3',
        height: '1.75',
    })
);
console.log(
    calcBMI({
        weight: '68,3',
        height: '1,65',
    })
);
console.log(
    calcBMI({
        weight: '118.3',
        height: '1,95',
    })
);

// changing

function calcBMI({ weight, height }) {
    
    const numericWeight = Number(weight.replace(',', '.'));

    const numericHeight = Number(height.replace(',', '.'));

    return ((Number.weight / Number.height ** 2).toFixed(1));
}

/* переписати функцію так, щоб приймала один обʼєкт параметрів,
замість набору незалежних аргументів
*/

function prinContactInfo(names = '', phones = '') {
    
    const nameList = names.split(',');

    const phoneList = phones.split(',');

    for (let i = 0; i < nameList.length; i+=1) {
        
        console.log(`user: ${nameList[i]} | tel: ${phoneList[i]}`);
    }
}

const names = 'Jacob,William,Solomon,Nicolas';
const phones = '1234567,7654321,1112223,2223334',

/* now

prinContactInfo (names, phones);

waiting

printContactInfo({
    names = 'Jacob,William,Solomon,Nicolas',
    phones = '1234567,7654321,1112223,2223334',
});
*/

function prinContactInfo({ names = '', phones = '' } ) {
    
    const nameList = names.split(',');

    const phoneList = phones.split(',');

    for (let i = 0; i < nameList.length; i+=1) {
        
        console.log(`user: ${nameList[i]} | tel: ${phoneList[i]}`);
    }
}

or 

function prinContactInfo(params) {

    const { names = '', phones = '' } = params;

    const nameList = names.split(',');

    const phoneList = phones.split(',');

    for (let i = 0; i < nameList.length; i+=1) {
        
        console.log(`user: ${nameList[i]} | tel: ${phoneList[i]}`);
    }
}

