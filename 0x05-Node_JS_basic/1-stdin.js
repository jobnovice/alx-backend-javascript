const readline = require('readline');

// Create an interface to read from stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle user input
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close(); // Close the readline interface after receiving input
});

// Handle program termination (Ctrl+C or other signals)
rl.on('SIGINT', () => {
  console.log('\nThis important software is now closing');
  process.exit(0); // Exit the process
});

// Handle program closure after readline finishes
rl.on('close', () => {
  console.log('This important software is now closing');
});
