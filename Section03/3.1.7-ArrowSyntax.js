// refactor the functions below into arrow syntax
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;

const greet = (name) => `Hello, ${name}`;

const timeOfDayGreet = (name, timeOfDay) => {
  return `Hello, ${name}, good ${timeOfDay}`;
}

const tripleAndHalf = (num) => (num * 3) / 2;

const sumTwoNumbers = (num1, num2) => {
  console.log(`The sum of your numbers is ${num1 + num2}.`);
  return num1 + num2;
}
