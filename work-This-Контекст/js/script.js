//Работа с контекстом, с this и разными методами 


//function hello() {
  //  console.log('Hello', this);
//}

//let hi = {
 //   name: 'Dan',
 //   age: 23,
 //   sayHello: hello,
 //   say: hello.bind(this),
  //  logInfo: function(job, salary) {
   //     console.group(`${this.name} info:`)
   //     console.log(`Name is ${this.name}`)
   //     console.log(`Age is ${this.age}`)
   //     console.log(`Job is ${job}`);
   //     console.log(`Salary is ${salary}`);
   //     console.groupEnd()
   // }
//}
 //let person =  {
  //   name: 'Max',
   //  age:26,
 //}
 //hi.logInfo.call(person, 'Back-end', '3700$') 


 //or

 //hi.logInfo.apply(person, ['Back-end', '3700$'])




 //let numb = [1, 2, 3, 4, 5]
 //function calc(arr, num) {
  //   return arr.map((i) => {
   //      return i * num
   //  })
 //}
 //console.log(calc(numb, 5));


 //or 
 //let numb = [1, 2, 3, 4, 5] 
 //Array.prototype.multBy = function (n) {
  //   return this.map((i) => {
   //      return i * n
   //  })
 //}
 //console.log(numb.multBy(5))






 //function hello() {
 //  console.log('Hello', this);
 //}


 //let person = {
 //  name: 'Dan',
 //  age: 20,
 //  sayHello: hello,
 //  sayHelloWindow: hello.bind(document),
  // logInfo: function(job, phone) {
   //  console.group(`${this.name} info:`);
  //  console.log(`Name is ${this.name}`);
  //  console.log(`Age is ${this.age}`);
  //  console.log(`Job is ${job}`);
  //  console.log(`Phone is ${phone}`);
   // console.groupEnd();
  //}
//}

//let pers2 = {
// name: 'Alex',
// age: 38,
//}
 //let fnAlex = person.logInfo.bind(pers2)
 //fnAlex('Backend', '063-25-36-545')
