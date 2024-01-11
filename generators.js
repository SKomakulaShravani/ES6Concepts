//Generators are a special type of function in JavaScript that allow us to pause and resume the execution of a function, yielding multiple values over time
function* fibonacciGenerator() {
    let a = 0;
    let b = 1;

    while (true) {
        yield a;//yield produce a sequence of values
        [a, b] = [b, a + b];
    }
}

// Create an instance of the generator
const fibonacci = fibonacciGenerator();

// Generate the first 10 Fibonacci numbers
for (let i = 0; i < 10; i++) {
    console.log(fibonacci.next().value);
}
