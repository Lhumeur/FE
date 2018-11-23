const Fibonacci = require("./fibonacci");

const array = [5, -4, 7, 1, -10, 10, 5, 2];

const fib = new Fibonacci(array);

const filteredByFibArr = array.filter(item => fib.searchNumbers(item));

module.exports = filteredByFibArr;