//puuting alltogether
const person = { name: 'Shravs', age: 32 };
const { name: personName, age: personAge } = person; 

const greetPerson = (name = 'Guest') => {
  return `Hello, ${name}! Your age is ${personAge}.`;
};

console.log(greetPerson(personName));  // Output: Hello, Shravs! Your age is 32.
