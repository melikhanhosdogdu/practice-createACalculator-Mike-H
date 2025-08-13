// Calculator Functions
function absoluteValue(num) {
  return Math.abs(num);
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(num) {
  return Math.sqrt(num);
}

function findMax(numbers) {
  return Math.max(...numbers);
}

function findMin(numbers) {
  return Math.min(...numbers);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function customRound(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

// Test each function with sample inputs
console.log("Absolute value of -45.67:", absoluteValue(-45.67));
console.log("5 raised to the power of 3:", power(5, 3));
console.log("Square root of 144:", squareRoot(144));
const testNumbers = [3, 78, -12, 0.5, 27];
console.log("Maximum of [3, 78, -12, 0.5, 27]:", findMax(testNumbers));
console.log("Minimum of [3, 78, -12, 0.5, 27]:", findMin(testNumbers));
console.log("Random integer between 1 and 50:", randomInt(1, 50));
console.log("23.67891 rounded to 2 decimal places:", customRound(23.67891, 2));

// Simple CLI calculator
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\nCalculator Menu:");
  console.log("1. Absolute Value");
  console.log("2. Power");
  console.log("3. Square Root");
  console.log("4. Maximum");
  console.log("5. Minimum");
  console.log("6. Random Integer");
  console.log("7. Custom Rounding");
  console.log("0. Exit");
}

function showMenu() {
  showMenu();
  readline.question("Select an operation (0-7): ", (choice) => {
    switch (choice) {
      case "1":
        readline.question("Enter a number: ", (num) => {
          console.log("Result:", absoluteValue(Number(num)));
          showMenu();
        });
        break;
      case "2":
        readline.question("Enter base: ", (base) => {
          readline.question("Enter exponent: ", (exp) => {
            console.log("Result:", power(Number(base), Number(exp)));
            showMenu();
          });
        });
        break;
      case "3":
        readline.question("Enter a number: ", (num) => {
          console.log("Result:", squareRoot(Number(num)));
          showMenu();
        });
        break;
      case "4":
        readline.question("Enter numbers separated by commas: ", (input) => {
          const nums = input.split(",").map(Number);
          console.log("Result:", findMax(nums));
          showMenu();
        });
        break;
      case "5":
        readline.question("Enter numbers separated by commas: ", (input) => {
          const nums = input.split(",").map(Number);
          console.log("Result:", findMin(nums));
          showMenu();
        });
        break;
      case "6":
        readline.question("Enter min value: ", (min) => {
          readline.question("Enter max value: ", (max) => {
            console.log("Result:", randomInt(Number(min), Number(max)));
            showMenu();
          });
        });
        break;
      case "7":
        readline.question("Enter a number: ", (num) => {
          readline.question("Enter decimal places: ", (dec) => {
            console.log("Result:", customRound(Number(num), Number(dec)));
            showMenu();
          });
        });
        break;
      case "0":
        console.log("Goodbye!");
        readline.close();
        break;
      default:
        console.log("Invalid choice. Try again.");
        showMenu();
    }
  });
}

// Start CLI
showMenu();
