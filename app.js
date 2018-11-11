// function hello() {
//   var name = "ironhacker";
//   console.log("hello " + name);
// }

// hello();
// console.log(name);

// for (var i = 1; i <= 30; i++) {
//   console.log("Iteration number: " + i);
// }
// console.log("After the loop", i);


// for (let i = 1; i <= 30; i++) {
//   console.log("Iteration number: " + i);
// }
// console.log("After the loop", i);

//ADVANTAGE OF USING LET
// let name = "ironhacker";

// if(true) {
//   let name = "ted";
//   console.log("name inside if statement: " + name);
// }

// console.log("name outside if statement: " + name);

// var name = "ironhacker";
// if (true) {
//   var name = "ted";
//   console.log("name inside if statement: " + name);
// }
// console.log("name outside if statement: " + name);


// console.log(Math.PI);

// WRONG WAY TO USE A SET NUMBER
// let apple = {
//   color: 'red',
//   price: 5
// }

// function finalPrice(fruit){
//     return fruit.price + (fruit.price * 0.7);
// }

// CORRECT WAY IS TO USE CONST
// const TAX_RATE = .08;

// let fruit = {
  // ['apple', 'red', 5]
  // ['orange', 'yellow', 4]
// }

// function finalPrice(f) {
    // return f.[2] + (f.[2] * TAX_RATE);
// }
// console.log("Here's the total cost for a fruit: " + finalPrice(0))

// not sure what to do with above

// if (true) {
//   var name = "Ironhacker";
//   var name = "This works, which isn't necessarily a good thing";
// }
// above will work ,which isn't good, because name can't mean 2 different things.

// if (true) {
//   let name = "Ironhacker";
//   let name = "This doesn't work";
// }
// this doesn't work, js sees let as a repeat and will throw an error, which is correct.

// if (true) {
//   console.log(name);
//   var name = "Ironhacker";
// }

// // undefined

// if (true) {
//   console.log(name);
//   let name = "Ironhacker";
// }

// ReferenceError: name is not defined
//let is better because it doesn't allow you to declare a variable after console logging it, it must be before consoling it.

// let greeting = `yo, ironhack!`;

// let awesomePlace = "Ironhack";
// greeting = `Yo, ${awesomePlace}!`;
// console.log(greeting);

// => "Yo, Ironhack!"

// example:
// let customer = { firstName: "foo", lastName: "Kim"};
// let message = `Hello ${customer.firstName} ${customer.lastName}!!`;

// console.log(message);

// let greeting = "yo, joey! \
// How are you doing?";
// console.log(greeting);

// console.log(`string text line 1 
// string text line 2`);

// const str = "to be, or not to be, that is the question.";

// console.log(str.startsWith("to be"));
// console.log(str.startsWith("not to be"));
// console.log(str.startsWith("not to be", 16));

// const str2 = "to be, or not to be, that is the question.";

// console.log(str2.endsWith("question."));
// console.log(str2.endsWith("to be"));
// console.log(str2.startsWith("to b", 19));

// const str3 = "to be, or not to be, that is the question.";

// console.log(str3.includes("to be"));
// console.log(str3.includes("question"));
// console.log(str3.includes("nonexistent"));
// console.log(str3.includes("To be", 1));

// OBJECT/ARRAY DESTRUCTURING

// let person = {
//   name: "ironhacker",
//   age: 25,
//   favoriteMusic: "metal"
// };

// let { name, age, favoriteMusic } = person;

// console.log(`Hello, ${name}.`);
// console.log(`You are ${age} years old.`);
// console.log(`Your favorite music is ${favoriteMusic}.`);

// What this does above is set variables attached to the same names to the names they have within the object, so we can call the variable name to reach the object key's value quickly.

// const person = {
//   naoriteMusic: "metal",
//   address: {
//     street: "super cool st",
//     number: 123,
//     city: "miami"
//   }
// };
// me: "ironhacker",
//   age: 25,
//   fav
// let {
//   name,
//   age,
//   favoriteMusic,
//   address: { street: newStreetVarName }
// } = person;

// console.log();

//destructuring also works for nested objects like above.

//Arrays

// const numbers = ["one", "two", "three", "four", "five"];

// put first item from array in variable
// const [first] = numbers;
// console.log(first);

// const [first, second, third] = numbers;
// console.log(first, second, third);

// const [, , y] = numbers;
// console.log(y);

// Spread Operator 
const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];

// old  way
// const animals = [];

// reptiles.forEach(function(oneReptile) {
//   animals.push(oneReptile);
// });
// mammals.forEach(function(oneMammal) {
//   animals.push(oneMammal);
// });
// console.log(animals);

// spread way - SO MUCH FASTER
const animals = [...mammals, ...reptiles];
console.log(animals);