


// const flat = {
//     rooms: {
//         min: 1,
//         max: 3,
//     },
//     floor: 3,
//     location: 'Warsaw',

// }
// console.log(flat);
// //console.log(flat.length); -- не може бути довжини
// console.log(flat.floor); //можно звернутися до конткретного
// //console.log(flat.toLocalUpperCase()); -- не можно зробити UpperCase

// flat.street = 'Ak.Pavlowa';
// console.log(flat);
// flat.location = 'Chernigiv'
// flat.comfortable = ['super']
// flat.contains = {
//     Bad:2,
//     Fridge:1,
// }
// console.log(flat);

// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     changeName(newName) {
//         this.name = newName
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack)
//     },
//     updateRating(newRating) {
//         this.rating = newRating
//     },
//     // getTrackCount() {
//     //  return this.tracks.length
//     // }
// }
// playlist.updateRating(8)
// playlist.addTrack('Bitch')
// playlist.changeName('Aespa')

// console.log(playlist);

//- addTrack
//  * - updateRating
// * - getTrackCount


// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

//   const findFriendByName = function (allFriends, nameToFind) {
//     for (const friend of allFriends) {
//         //console.log(friend);
//         if (friend.name === nameToFind) {
//             console.log('find');
//             break
//         }
//     }
//   };
// findFriendByName(friends, 'Mango')
// console.log(findFriendByName(friends, 'Mango'));


//--------------------------------------Iteration----------------------------------------

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
let total;
const keys = Object.keys(feedback);
console.log(keys);
for (const key of keys) {
    total+=feedback[key]
}
console.log(total);

const values = Object.values(feedback)
console.log(values);

const entriws = Object.entries(feedback)
console.log(entriws);