const prev = prompt('Enter your name, please')
const reg = /\d/g

console.log(reg.test(prev));

// console.log(prev.search(reg));

// Method match

// console.log(prev.match(reg));

// const pass = prompt('Password')

// console.log(pass.replace(/./g, '*'));
// console.log(pass.replace(/\./g, '*'));


// console.log('12-52-36'.replace(/-/g, ':'));



//  \d || [0-9] - numbers
//  \D || [^0-9] - All, except numbers
// [a-z] - латиницы строчные
// [a-z] [A-Z] - вся латиница
// \s - Lambs and string transfers
// +, *, ? - The number of repetitions