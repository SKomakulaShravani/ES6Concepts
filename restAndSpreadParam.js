//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));// Expected output: 6

console.log(sum(1, 2, 3, 4));// Expected output: 10

  //spread operator
  const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);  // Output: [1, 2, 3, 4, 5, 6]

  