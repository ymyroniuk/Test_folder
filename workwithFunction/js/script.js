// Запуск функции
//function getResult () {
   // let message = 'mesagges';
  //  console.log(message)
//}
//getResult()



//Функция внутри другой функции
// function showMen () {
   // let numOne, numTwo;
   // function getNumOne() {
    //    numOne = 20;
  //  }
   // function getNumTwo() {
   //     numTwo = 15;
  //  }
  //  getNumOne();
  //  getNumTwo()
  //  let numThree = numOne + numTwo;
  //  console.log(numThree)
//}
//showMen()


//Параметры или аргументы + local переменная

// function calcSumm(numOne, numTwo) {
   // console.log(`Num one: ${numOne}`);
  //  console.log(`Num two: ${numTwo}`);
  //  let numThree = numOne + numTwo;
 //   console.log(`Summa: ${numThree}`)
//}
//calcSumm(5, 10)




//Рекурсия
// function getNumOne (num = 10, two = 15) {
   // let bam = num + two;
   // console.log(bam);
//} 
//function calcSumm (num, two){
 //   return num + two
//}
//getNumOne()
// or
//function calcSumm(num, two) {
  //  if(two === 1) {
  //     return num
  //  } else {
   //     return num * calcSumm(num, two - 1 );
  //  }
//}
//console.log(calcSumm(2, 3))




//обычный пример  

//function getNumOne(num, two) {
  //  let result = 2;
   // for(let i = 0; i < two; i++) {
    //result *= num;
    //}
   // return result;
//}
//console.log(getNumOne(2, 3 ))





//Функцианальное выражение 

//let showMessage = function() {
 ///   console.log('Hi')
//}
//showMessage()

//let showMen
 //  if(1 < 2) {
  //   showMen = function showMessage() {
  //          showMen = 1 + 2;
    //        console.log(showMen)
     //   }
    //}
   // showMen()






   //Стрелочная функция

  // let getNumOne = (text, name) => text + ", " + name + '!';
   // console.log(getNumOne('Hello', 'John'))/

   // let message = (text, name) => {
      // let mess = text + ', ' + name +  '!';
    //   return mess
   //}
   // console.log(message('Hello', 'Dan'));



//SetInterval or SetTimeout

//function showMen(name, age ) {
//    console.log(`${name}, ${age}!`)
//}
//setTimeout(showMen, 2000, 'John', 'my age: 30')



//function showMen(name = 'Peter', age = 25) {
 //   console.log(`${name}, ${age}!`)
//}
// setInterval(showMen, 2000,)

//function showMen (num) {
 //   console.log(num)
 //   if(num < 10) {
  //      setTimeout(showMen, 1000, ++num);
//    }
//}
//setTimeout(showMen, 1000, 1 )

//clearTime

//function showMen (num) {
  //    console.log(num)
   //   let time = setTimeout(showMen, 1000, ++num);
   //    if(num > 3) {
    //       clearTimeout(time)
     //  }
  // }
  // setTimeout(showMen, 1000, 1 )


  //clearSetInterval
  // let result = 0
  // function showMen(num) {
   //    result += num;
  //     console.log(result);
 //      if(result === 4) {
    //       clearInterval(res)
   //    }
  // }
  // let res = setInterval(showMen, 1000, 1);
   
//function showMen() {
 //   console.log('John');
//}
//setTimeout(showMen, 500);
 //   console.log('Dan');







 //Замыкание

//function current(namee) {
 //return function(lastName) {
  // console.log( namee + lastName)
 //} 
//}
//let cur = current(namee = 'Den ');
//console.log(cur(namee = 'Pol'))
//console.log(cur('Goncharenko'))