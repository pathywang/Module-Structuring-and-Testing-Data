// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.
greeting = "Hello"
function sayHello(greeting, name) {
  return `${greeting},${name}!`;
}
console.log(sayHello(greeting, "Jack"))
testName = "Aman";

const greetingMessage = sayHello(greeting, testName);

console.log(greetingMessage); // 'hello, Aman!'
