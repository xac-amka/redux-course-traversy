import { Map } from 'immutable'; // hash map
// Enforcing immutability
// Immutable.js
let book = Map({ title: 'Harry Potter' });

function publish(book){
    return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());