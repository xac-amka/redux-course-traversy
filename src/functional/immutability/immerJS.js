import { produce } from 'immer';
// Enforcing immutability
// Immer.js
let book = { title: 'Harry Potter' };

function publish(book){
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    })
}

let updated = publish(book);

console.log(book);
console.log(updated);