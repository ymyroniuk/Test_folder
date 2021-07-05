//let nname = 'Yarik',
//age = 20,
//current = true
//console.log(typeof nname);
//console.log(typeof age);
//console.log(typeof current)


// ? тернарное выражение 
//let isRange = false ;
//isRange ? console.log('Yes') : console.log('ohhh, nooo')



//Функции 

//function calc(year) {
  //  return 2020 - year
//}
//console.log(calc(1993))
//function agee(nname, year) {
 //   let age = calc(year)
  //  if(age > 0) {
  //     console.log('Hi,' + nname + ' your age: ' + age)
  //  } else {
  //      console.log('Naebal')
  //  }
    
//}
//agee(nname =  ' Yarik', year = 1999)

// Function Declaration
 //function bam (namee) {
  // console.log('Hi', namee )
 //}



 //Function Expression
//let bam2 = function bam2(name) {
 // console.log('Hi', name);
//}
//bam(namee = 'Den')
//bam2(name = 'Den')



 //Анонимные функции 
//let counter = 0
//let interval = setInterval(function() {
 // if(counter === 5) {
 // clearInterval() // clearTimeout
 // } else {
 //   console.log(++counter)
 // }
//},1000)



//Стрелочные функции
//function great(namee) {
 // console.log('Hello', namee)
//}
//great(namee = 'Yarik')

//let arrow = (namee) => {
 // console.log('Hello', namee)
//}
//arrow(namee = 'Yarik')

//let arrow2 = namee => console.log('Hello', namee)
//arrow2(namee = 'Yarik')

//let count  = num => {
 // return num ** 2
//}
//console.log(count(num = 5)) 

//или есть еще такой вариант 
//let count = num => num ** 2
//console.log(count(num = 4))






// Массивы 

//let cars = ['Ford', 'Porshe', 'Range-Rower'];
//console.log(cars)
//console.log(cars[2])
//cars[2] = 'Range'
//console.log(cars)
//console.log(cars.length)
//cars[cars.length] = 'Mazda'
//console.log(cars)


//let cars = ['Den', 'Tima', 'Artem', 'Julia'];
//let num = [1, 2, 3, 4, 5, 6, 7, 8]
//cars.push('Vlad')
//cars.unshift('Vika')
//cars.shift() - remove start
//cars.pop() - remove end
//console.log(cars.reverse())

//Задача 1 + Methods
//let namee  = 'Hello, world my name is Den';
//let current = namee.split('').join(' ') // reverse()
//console.log(current)


//let cars = ['Den', 'Tima', 'Artem', 'Julia'];
//let people = [
 // {name : 'Vlad', salary : 1500},
 // {name : 'Denis', salary : 2500},
 // {name : 'Vika', salary : 3500}
//]
//let person = people.find(function(person) {    //findIndex
  //return person.salary === 3500
//})
//console.log(person) // console.log(people[index])





//let cars = ['Den', 'Tima', 'Artem', 'Julia'];
//let people = [
 // {name : 'Vlad', salary : 1500},
 // {name : 'Denis', salary : 2500},
 // {name : 'Vika', salary : 3500}
//]
//let find 
//for(let person of people) {
//if(person.salary === 3500) {
 //  find = person 
//}
//}
//console.log(find)


// or
//let cars = ['Den', 'Tima', 'Artem', 'Julia'];
//let people = [
 // {name : 'Vlad', salary : 1500},
 // {name : 'Denis', salary : 2500},
 // {name : 'Vika', salary : 3500}
//]
//let person = people.find((person) => {
// return person.salary === 3500
//})
//console.log(person)



//let cars = ['Den', 'Tima', 'Artem', 'Julia']; // includes
//console.log(cars.includes('Tima'))

//let upper = cars.map(car => {        // метод map
//  return car.toUpperCase()          //метод toUpperCase  
//})
//console.log(upper);
//console.log(cars)


 // метод Math...

//let numbers = [ 1, 2, 3, 4, 5, 6, 7];
//let pow = num => num ** 2
//let scr = num => Math.sqrt(num) 
//let nom = numbers.map(pow).map(Math.sqrt)
//console.log(nom)



//метод filter 

//let numbers = [ 1, 2, 3, 4, 5, 6, 7];
//let pow = num => num ** 2
//let pow2 = numbers.map(pow)
//let pow3 = pow2.filter(num => {    // or num > 20
//  return num > 20
//}) 
//console.log(pow2)
//console.log(pow3)




//метод reduce 

//let people = [
 //  {name : 'Vlad', salary : 1500},
 //  {name : 'Denis', salary : 2500},
 //  {name : 'Vika', salary : 3500}
 //]
 //let per =  people
 //.filter(person => person.salary > 2000)
 //.reduce((info, person) => {
 //  info += person.salary
 //  return info
 //}, 0)
 //console.log(per)

 





//Циклы

//let cars = ['Ferrari', 'Skoda', 'Range', 'Ford', 'Toyota'];
//for(let car of cars) {
 //   console.log(car)
//}







//Объекты, (значение записываю через : )
// let person = {
 //    firstName: 'Yarik',
  //  lastName: 'Myroniuk',
   //  age: 17,
   //  languages: ['Eng', 'Ru', 'Ukr'],
   //  hasWife: false,
   // gender:  function() {
   //     console.log('his a male')
   // }
//}
//console.log(person)
//person.gender()
//let lang = 'languages'
//console.log(person[lang])
//person.age = 18
//console.log(person)
//person.itProgrammer =  true
//console.log(person)



//Данные с которыми работал

//let person = {
 // name: 'John',
 // age: 18,
 // salary: 1500,
 // isProgrammer: true,
 // languages: ['ru', 'eng', 'ukr'],
 // ['key_' + (3 + 1)]: 'Computed keys',
 // gender() {
  //  console.log('Youre gender: male')
  //},
//} 
  



//Context

//info() {
 // console.log('this:', person)
 // console.info('Information this man, and his name', person.name ) 
//}
//}
//person.info()


 //Method bind 

//let logger = {
 // keys() {
   // console.log('Object Keys:', Object.keys(this))
  //}
//}
//let bound = logger.keys.bind(person)    //Method bind 
//bound()



//Method call 

//logger.keys.call(person)




//let logger = {
 // keys() {
  //  console.log('Object Keys:', Object.keys(this))
  //},
  //keysAndValue() {
   //let pam = this          //Это если не стрелочная функция 
   // Object.keys(this).forEach((key) => {
    //  console.log(`'${key}': ${this[key]}`)
    //})  //or .bind(this))     //Это если не стрелочная функция 
 // }
//}
//------Method apply()
//logger.keysAndValue.apply(person) 












//person.age++
//person.languages.push('by');
//console.log(person)
//person['key_4'] = 'Chinaaa'
//delete person['key_4']         //удаление
//console.log(person['key_4'])





//Деструктуризация 
//let namee = person.name
//let age = person.age
//let languages = person.languages
            //age: Person.age = 20
//let {name, age, languages} = person
//console.log(name, age, languages)








//work with for(in)


//console.log(person)


//for(let key in person) {
 // if(person.hasOwnProperty(key)) {
  //  console.log('key:', key)
   // console.log('value:', person[key])
  //}
//}




// or
 //let keys = Object.keys(person)
 //keys.forEach((key) => {
  // console.log('key:', key)
  // console.log('value:', person[key])
 //})













//Number 

//function getNum(min, max) {
 //   return Math.floor(Math.random() * (max- min) + min)
//}
//console.log(getNum(10, 42))



//Работа со строками 
//let nname = 'Yarik'
//let age = 18
//function getAge() {
 //   return age
//}
//let put = `Привет меня зовут, ${nname} и мой возраст ${getAge()} лет.`
//console.log(put)
 //let put = 'Hi,' + nname + "." + ' Welcome to my page,' + ' my age - ' + age;
 //console.log(put)

  //let namee = 'John'
// console.log(namee.indexOf('n'))
// console.log(namee.repeat(3))

// let current = '   Baaam    ';
// console.log(current)
// console.log(current.trim());
// console.log(current.trimLeft())
// console.log(current.trimRight())


//function cut(a, name, age) {
 // if(age < 0) {
  //  age = 'Invalid number'
  //}
  //console.log(a, name, age)
  //return `${a[0]} ${name} ${a[1]} ${age} ${a[2]}`
//}
//let personName = ' Yarik'
//let personName2 = "Maks";
//let personAge2 = -2
//let personAge = 20
//let output = cut`Name:${personName}, Age: ${personAge}`
//let output2 = cut`Name:${personName2}, Age: ${personAge2}`
//console.log(output)
//console.log(output2) 






//Параметры по умолчанию 
//let num = (a = 40, b = 20) => a + b 
//console.log(num());

//function sumALL(...all) {

  //console.log(all)

 //let result = 0
  //for(let num of all) {
   // result += num
 // }
 // return result
//}
//let res = sumALL(all = 1, 2, 3, 4, 5, 6, 7);
//console.log(res)







//Замыкание

//function current(namee) {
 //return function(lastName) {
  // console.log( namee + lastName)
 //} 
//}
//let cur = current(namee = 'Den ');
//console.log(cur(namee = 'Pol'))
//console.log(cur('Goncharenko'))












//Асинхронность



//setTimeout

//let timeout = setTimeout(() => {
 // console.log('Hi, Dan')
//}, 2000)
//clearTimeout(timeout);





//setInterval

//let interval = setInterval(() => {
  // clearInterval(interval)                  // чтобы сработало, но один раз
 // console.log('Hi, Anna')
//}, 1000);
//clearInterval(interval)          // чтобы вообще не сработало 
 



//let time = (namee, wait = 1000) => {
 // setTimeout(namee, wait) 
//}
//time(() => {
 // console.log('Boom')
//}, 1000)






// Promise and Methods


//для себя resolve - показывает, что все ок 
//для себя reject - показывает, что при выполнении асинхрон. кода произошла ошибка 


//let time = (wait = 1000) => {
 // let proms = new Promise((resolve, reject) => {
 //   setTimeout(() => {
  //    //resolve()
  //   reject('Это просто пиздяо')
   //}, wait)
  //})
  //return proms
//}

//time(2000)          // or(wait = 3000)
//.then(() => {                                                   //метод then 
 // console.log('After 2 seconds')
//})
//.catch(error => console.error('пиздяо братан',error))           //метод catch             

//.finally(() => console.log('Finally'))                          //метод finally 




//let getNum = () => new Promise(resolve => resolve([
 // 1, 1, 2, 3, 5, 8, 13
//]))
//getNum().then(num => console.log(num))

//or работа с Асинхронной функцией 

 //async function asyncExample() {
  // try {
  //  await time(2000)
  //  let num = await getNum()
  //  console.log('Numbers', num)
  // }catch(e) {
  //   console.log(e)
  // }finally {
  //   console.log('Finally')
  // }
 // }
 //asyncExample()











 //Работа с DOM

//let header = document.getElementById('head')
//console.dir(header);                         //метод dir
//setTimeout(() => {

//console.log(header.textContent)
//header.textContent = 'Hello Dan'                //вывод на экран
 // header.style.textAlign = 'center';
 // header.style.color = 'red'
 // header.style.fontFamily = 'Verdana'
 // header.style.fontSize = '70px'

//}, 1000);


//setTimeout(() => {
 // showMessage(header, 'Java Script', 'blue')
//},  1000);

//function showMessage(node, text, color = 'red') {
 // node.textContent = text                //вывод на экран
 // node.style.textAlign = 'center';
 // node.style.color = color
 // node.style.fontFamily = 'Verdana'
 // node.style.fontSize = '70px'
//}

//let header2 = document.getElementsByTagName('h2')[0]
//let header2 = document.getElementsByClassName('h2-class')[0]
//let header2 = document.querySelector('.footer')
//console.log(header2);
//let header3 = header2.nextSibling
//let head4 = header2[1]
//console.log(header3);

//let header2 = document.querySelectorAll('h2')
//console.log(header2)
//let header3 = header2[1]
//console.log(header3);

//click

//header.onclick = () => {
 // if(header.style.color === 'blue') {
 //   header.style.color = 'red'
  //  header.style.backgroundColor = 'black' 
 // }else  {header.style.color = 'blue',
 //         header.style.backgroundColor = 'white'}
  // console.log('onclick');
//}







//Прочитать про MouseEvent!!!!!!































































//Это про паралакс




//'use strict'

//Ждем загрузку контента

//window.onload = function() {
  //  let parallax = document.querySelector('.parallax');

    //if(parallax) {
    //    let content = document.querySelector('.parallax__container');
    //    let clouds = document.querySelector('.images-parallax__clouds');
    //    let mountains = document.querySelector('.images-parallax__mountains');
     //   let human = document.querySelector('.images-parallax__human')

        //Коэффициенты 

  //      let forClouds = 40;
   //     let forMountains = 20;
   //     let forHuman = 10;


        //Скорость анимации

//        let speed = 0.05;



        //Объявление переменных 

//        let positionX = 0, positionY = 0;
  //      let coordXprocent = 0, coordYprocent = 0;


 //       function setMouseParallaxStyle() {
  //          let distX = coordXprocent - positionX;
   //         let distY = coordYprocent - positionY;

     //       positionX = positionX + (distX * speed);
     //       positionY = positionY + (distY * speed);

//            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
 //           mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
  //          human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

    //        requestAnimationFrame(setMouseParallaxStyle);
    //    }
    //    setMouseParallaxStyle();



   //     parallax.addEventListener("mousemove", function(e) {

        //Получение ширины и высоты блока

   //     let parallaxWidth = parallax.offsetWidth;
  //     let parallaxHeight = parallax.offsetHeight;



        //Ноль по середине

   //     let coordX = e.pageX - parallaxWidth / 2;
    //    let coordY = e.pageY - parallaxHeight / 2;



        //Получаем проценты 


    //    coordXprocent = coordX / parallaxWidth * 100;
   //     coordYprocent = coordY / parallaxHeight * 100;

 //  });

  //  }
//}