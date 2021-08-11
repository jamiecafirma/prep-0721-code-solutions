function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  const sum = num1 + num2;
  return sum * 5;
}

const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  const product = num1 * num2;
  return product / 5;
}

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);
