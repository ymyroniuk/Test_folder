let citiesUkraine = ['Kyiv', 'Dnipro', 'Rivne', 'Lviv']
let city2 = ['Moscow', 'Praga', 'Paris', 'Berlin']


// work with Spread

//console.log(...citiesUkraine);



//let allcity = [...citiesUkraine, 'New York', ...city2]
//console.log(allcity);




//С помощью метода concat

//let allcity = city2.concat(citiesUkraine)
//console.log(allcity);



//let citizenUkraine = {
 //   Kyiv: 25,
  //  Dnipro: 14,
  //  Rivne: 10,
  //  Lviv: 20
//}

//let citizen2 = {
 //   Moscow: 25,
  //  Berlin: 14,
  //  Praga: 10,
  //  Paris: 20
//}



///let newew = {...citizenUkraine}
//console.log({...citizenUkraine});




//let = numbers = [1, 12, 33, 18, 90]
//console.log(Math.max.apply(undefined, numbers));

//  or  

//console.log(Math.max(...numbers));





//let teg = document.querySelectorAll('div')
//let teg2 = [...teg]
//console.log(teg, Array.isArray(teg));
//console.log(teg2, Array.isArray(teg2));









// ==================== work with Rest ======================



//function calc(a, b, ...rest) {
 //   return a + b + rest.reduce((a, i) => {
 //       return a + i
  //  }, 0)
//}
//let num = [1, 2, 3, 4, 5]
//console.log(calc(...num));



//let [a, b, ...other] = num
//console.log(a, b, other);



//let pers = {
 //    name: 'Dan',
 //    age: 21,
 //    salary: 27000,
  //   jobs: 'Targetolog' 
//}
//let {name, age, ...others} = pers
//console.log(name, age, others);
