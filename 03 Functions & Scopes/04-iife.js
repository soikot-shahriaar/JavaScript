// Immediately Invoked Function Expressions (IIFE)

// IIFE with a named function
(function chai() {
  // This is a named function IIFE
  // The function is defined and immediately executed

  console.log(`DB CONNECTED`); // This message will be logged immediately upon execution
})();
// The function is invoked right after its definition, so it runs immediately and outputs "DB CONNECTED"

// IIFE with an arrow function
((name) => {
  // This is an arrow function IIFE
  // The arrow function takes one parameter 'name'

  console.log(`DB CONNECTED TO ${name}`); // Outputs the message with the name
})("shahriar");
// The arrow function is immediately invoked with the argument 'shahriar'
// This will log "DB CONNECTED TWO shahriar"

// Summary of IIFE:
// - IIFEs are functions that are defined and invoked immediately.
// - They are useful for creating a private scope, which helps avoid polluting the global scope.
// - Named IIFEs can be helpful for debugging since they have a name that appears in stack traces.
// - Arrow function IIFEs can also be used for concise syntax and passing parameters immediately.
