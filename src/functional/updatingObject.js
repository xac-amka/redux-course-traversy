// const person = { 
//     name: "John",
//     address: {
//         country: "USA",
//         city: "New York"
//     }
// };
// First way to update object
// const updated = Object.assign({}, person, { name: "Doe", age: "30" });
// Second way to update object
// const updated = {...person, name: "Doe"};
// console.log(updated);

// When working with nested object, we have to deep copy. Because seperate operator does shallow copy which is copying same address in memory.
const person = { 
    name: "John",
    address: {
        country: "USA",
        city: "New York"
    }
};
// Need deep copying it.
const updated = { 
    ...person,
    address: {
        ...person.address,
        city: "Ulaanbaatar"
    }
};
console.log(person);