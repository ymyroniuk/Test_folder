// Методы массивов

 let people = [
    {name: 'John', age: 21, salary: 3000},
    {name: 'Dan', age: 23, salary: 10000},
    {name: 'Tolik', age: 33, salary: 6500},
    {name: 'Maks', age: 30, salary: 2000},
    {name: 'Ivan', age: 27, salary: 4400},
    {name: 'Julia', age: 38, salary: 3900}
]
//for(let i = 0; i < people.length; i++) {
 //   console.log(people[i]);
//}



 //for(let person of people) {
 //   console.log((person));
//}




// Первый метод будет  forEach

 // people.forEach((person) => {          //index, pArray
  //  console.log(person);
  //  console.log(index);
   // console.log(pArr);
//})




// Второй метод будет Map


//let newPerson  = people.map(person => {
 //   return `${person.name} (${person.age})`
//})
//console.log(newPerson);








// Третий метод будет  filter

//let adults = people.filter(person => {
 //   if(person.age > 29) {
  //      return true
  //  }
//})
//console.log(adults);








//Четвертый метод будет reduce



// С помощью for

//let amount = 0
 //  for (let i = 0; i < people.length; i++) {
  //  amount += people[i].salary
//}
//console.log(amount);






// С помощью reduce 


 //let addperson = people.reduce((total, person) => {
  //   return total + person.salary
 //}, 0)
// console.log(addperson);









//Пятый метод будет find

//let pers = people.find(person => person.name === 'Dan')
  //{ 
//return person.name === 'Dan'
//})
//console.log(pers);





//Шестой метод будет findIndex


//let pers = people.findIndex(person => {
 //   return person.age === 30
//})
//console.log(pers);






//======================== Задачки 


//let amount = people
//.filter(person => {
  //  return person.salary < 4000       //.age < 30
//})
//.map(person => {
 //   return {
  //      info: `${person.name} (${person.age})`, 
   //    salary: person.salary                   // `${person.salary}`
   // }
//})
//.reduce((total, person) => {
 //   return total + person.salary 
//},0)
//console.log(amount);





