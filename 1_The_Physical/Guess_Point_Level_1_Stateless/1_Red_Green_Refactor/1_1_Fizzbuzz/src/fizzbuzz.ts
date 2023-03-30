export function fizzBuzz(number: number) {
  if (number < 1) throw new Error("The number should be equal or greater than 1");
  if (number > 100) throw new Error("The number should be equal or less than 100");
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return `${number}`;
}
