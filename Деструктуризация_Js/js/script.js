//Деструктуризация 


function calc(a = 10, b = 20) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
let [sum, sub, ...other] = calc(a = 20, b = 10)
console.log(sum, sub, other);





// Как он работает с Объектами 

//let pers = {
 //  name: 'Alex',
  //  age: 21,
  //  address: {
  //      country: 'France',
  //      city: 'Paris'
   // }
//}

//let {name, age,  ...other} = pers
//console.log(name, age, other);


//function info({name, age}) {
 //   console.log(name +  ' ' + age);
//}
//info(pers)