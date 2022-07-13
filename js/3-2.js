
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


const showProfileInfo = function (userProfile) {
    
    const { name, tag, location, avatar, stats: { followers, views, likes } } = userProfile;
    
    console.log(name, tag, location, avatar, followers, views, likes);
}

const profile = {
    name: "Jack Gluck",
    tag: "jcgk",
    locayion: "Ocho Rios, Jamaica",
    avatar: "http://twitter/1234.jpg,
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    }
}

showProfileInfo(profile);



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