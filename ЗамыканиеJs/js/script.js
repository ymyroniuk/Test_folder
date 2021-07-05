//'use strict'
//function calcNum(n) {
 //   return function() {
  //     console.log(1000 * n)
   // }
//}
//let calc = calcNum(10) 
//calc()



//function calcNum(n) {
  //  return function (num)  {
   //     return n + num
   // }
//}
//let calc = calcNum(5)
//console.log(calc(10))
//console.log(calc(20))


//function urLink(domain) {
  //  return (url) => {
   //     return `https://${url}.${domain}`
 //}
//}
//let ur = urLink('com')
//console.log(ur('google'))

//let mail = urLink('ru')
//console.log(('mail'));




//function bind(context, fn) {
  //  return function (...args) {
   //     fn.apply(context, args)
    //}
//}
//function logPerson() {
 //   console.log(`Person: ${this.namee}, ${this.age}, ${this.job}`);
//}
//let oneN = {namee: 'Den', age : 18, job : 'Frontend'}
//let twoN = {namee: 'Max', age : 20, job : 'Backend'}

//bind(oneN, logPerson)()
//bind(twoN, logPerson)()