
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

const feedback {
    good: 5,
    neutral: 10,
    bad: 3,
}

let totalFeedback = 0;
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


const cart = {
    items =[],
    getItems =[] { },
    add(product){ },
    remove(productName){ },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName){ }
    decreaseQuantity(productName){ }
}

console.table(cart.getItems());

cart.add({ name: "apple", price: 50 });
cart.add({ name: "lemon", price: 50 });
cart.add({ name: "lemon", price: 50 });
cart.add({ name: "strawberry", price: 50 });