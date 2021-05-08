//Arrays= variables that hold multiple values

const family=['Biju','Latha','Lalitha','Saaya','Saket','10'];

family[6]='7';

console.log(family);
console.log(family[0]);
family.push('Hello people');
family.unshift('Welcome');

console.log(family);

family.pop();

console.log(Array.isArray(family));
console.log(Array.isArray('Hello people'));
console.log(family.indexOf('Saket'));
console.log(family);