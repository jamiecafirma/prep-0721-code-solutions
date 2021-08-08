const person = {
  firstName: 'Jamie',
  lastName: 'Cafirma',
  hobby: 'reading'
};
console.log('person object: ', person);

const fullName = "The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'waitress';
console.log("The person's current job is: ", person.job);

person.previousJob = 'n/a';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);
