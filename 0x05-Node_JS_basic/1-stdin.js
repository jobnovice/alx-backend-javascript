const readline = require('readline');

// Create the readline interface
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Check if input is coming from a pipe
if (!process.stdin.isTTY) {
  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
  });
  process.stdin.on('end', () => {
    console.log('Welcome to Holberton School, what is your name?\n');
    console.log(`Your name is: ${input.trim()}`);
    console.log('This important software is now closing');
    process.exit(0);
  });
} else {
  // Interactive mode
  r1.question('Welcome to Holberton School, what is your name? \n', (name) => {
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    r1.close();
  });
}

// Handle SIGINT (Ctrl+C) gracefully
r1.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
