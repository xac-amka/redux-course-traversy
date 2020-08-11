// [1] Functions as First-Class Citizens
// function sayHello(){
//     return "Hello World"
// }
// let fn = sayHello(); it is gonna call function
// let fn = sayHello;   it is gonna pass reference

// We can call function inside function
// function greet(fnMessage){
//     console.log(fnMessage());
// }

// greet(sayHello);

// function sayHello() {
//     return function() {
//         return "Hello World";
//     }
// }

// let fn = sayHello();
// let message = fn();

// [2] Higher order function
// let numbers = [1, 2, 3];
// numbers.map(number => number*2);
// setTimeout(()=> console.log('Hello', 1000));

// import { compose, pipe } from "lodash/fp";

// [3] Functional Composition
// let input = "          JavaScript         ";
// let output = "<div>"+ input.trim() +"</div>";

// const trim = str => str.trim();
// const wrapInDiv = str => `<div>${str}</div>`;
// const toLowerCase = str => str.toLowerCase();

// // trim
// // wrap in div
// const result = wrapInDiv(toLowerCase(trim(input)));

// // const transform = compose(trim, wrapInDiv, toLowerCase)
// const transform = pipe(trim, toLowerCase, wrapInDiv)
// transform(input)

// // Composing and Piping with lodash

// [4] Currying - This name came from Huskell Curry
// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;
// const toLowerCase = str => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("h1"))
// console.log(transform(input));

// [5] Pure Function
// It is not pure function
// function myFunction(num){
//     return num * Math.random(); 
// }
// It is not pure function. Because minAge is global
// function isEligible(age) {
//     return age > minAge;
// }
// It is pure function
// function isEligable(age, minAge) {
//     return age > minAge
// }