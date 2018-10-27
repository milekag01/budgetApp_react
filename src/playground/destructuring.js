// const person = {
//     name: 'milek',
//     age: 20,
//     location: {
//         city: 'gandhinagar',
//         temp: 33
//     }
// }

// const {name: firstName = 'anonymous',age} = person;
// console.log(`name: ${firstName} age: ${age}`);
// const {city,temp: temperature} = person.location;
// console.log(`city:${city} temperature: ${temperature}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryam Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = "anonymous"} = book.publisher;

// console.log(publisherName);

const item = ['Coffee(hot)','$2.00','$2.50','$2.75'];

const [coffee, ,medium] = item;

console.log(`A medium ${coffee} costs ${medium}`);