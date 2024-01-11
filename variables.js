//let and const are used for variable declarations, and they have block-level scope.
function exampleScope() {
    if (true) {
      let localVar = 'I am inside a block';
      console.log(localVar);  // Output: I am inside a block
    }
  
    // console.log(localVar); // Error: localVar is not defined (due to block scope)
  }
  
  exampleScope();
  