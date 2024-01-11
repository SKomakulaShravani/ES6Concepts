//Destructuring allows us to extract values from objects and arrays.
// Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;

console.log(`Name: ${name}, Age: ${age}`);

// Array Destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;

console.log(`First Color: ${firstColor}, Second Color: ${secondColor}`);
