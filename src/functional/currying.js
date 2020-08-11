// function add(a, b) {
//     return a + b;
// }

// Currying is a technique that allows us to take a function that has in arguments and convert it to function that has a single argument. 
// N => 1

function add(a) {
    return function (b) {
        return a + b;
    }
}

const add2 = a => b => a + b; // Currying with arrow function
// In currying, for example we are not separating argument with like this (a, b). We use another paranthesis instead of it. 

// const add1 = add(1);
// add1(5); or
add(1)(5); //