// Predict and explain first...
// it should show syntax error

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Error occurs because we tried to declare a new variable "str" 
// that has the same name as the function parameter "str". 
// Parameter names act as local variables inside the function, 
// so redeclaring them with let/const is not allowed.

// my new code:

function capitalise(str) {
    return `${str[0].toUpperCase()}${str. slice(1)}`
}
console.log(capitalise("morning"))
console.log(capitalise("heavy"))


