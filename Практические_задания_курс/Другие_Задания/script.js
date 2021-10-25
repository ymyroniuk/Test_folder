//=============================== Урок 18 с функциями





// let numberOfFilms;

// function start() {
//      numberOfFilms = +prompt('How many films you have already looked?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('How many films you have already looked?', '');
//     }
// }
// start()

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('One of the movie viewed?', ''),
//             b = prompt('Hom much to evaluate it?', '')
        
//             if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//     }
// }
//  rememberMyFilms()

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         confirm('Viewed quite little films')
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         confirm('You are classic viewer')
//     } else if (personalMovieDB.count > 30) {
//         confirm('You are a kinoman')
//     } else {
//         alert('Error')
//     }
// }
//  detectPersonalLevel()


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log('Good luck');
//     }
// }
// showMyDB(personalMovieDB.privat)


//   function writeYourGenres () {
//         for (let i = 1; i < 2; i++) {

//             let genre = prompt('Введите ваши любимые жанры через запятую').toLowerCase()

//             if (genre === '' || genre == null) {
//                 console.log('Error');
//                 i--
//             } else {
//                 personalMovieDB.genres = genre.split(', ')
//                 personalMovieDB.genres.sort();
//             }
            
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Favorite genre ${i + 1} - this is ${item}`);
//         });
//   }
//     writeYourGenres()
// console.log(personalMovieDB); 























//// ============================ Урок 24 с объектами





// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: () => {
//         personalMovieDB.count = +prompt('How many films you have already looked?', '');
        
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('How many films you have already looked?', '');
//         }
//     },

//     rememberMyFilms: () => {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt('One of the latest movie viewed?', ''),
//                 b = prompt('How much to evaluate it?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('Done');
//             } else {
//                 console.log('err');
//                 i--;
//             }
//         }
//     },

//     detectPersonalLevel: () => {
//         if (personalMovieDB.count < 10) {
//             confirm('Просмотрено довольно мало фильмов')
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             confirm('Вы классический зритель')
//         } else if (personalMovieDB.count >= 30) {
//             confirm('Вы киноман')
//         } else {
//             console.log('error');
//         }
//     },


//     showMyDB: (hidden) => {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: () => {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false
//         } else {
//             personalMovieDB.privat = true
//         }

//     },


    // writeYourGenres: () => {
    //     for (let i = 1; i < 2; i++) {

            // Вариант 1
            
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`)
//             if (genre === '' || genre == null) {
//                 console.log('Error');
//                 i--
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//              console.log(`This is - ${i + 1} favorite genre ${item} `);
//         })
//     }
// }

        

            // Вариант 2

//             let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase()

//             if (genre === '' || genre == null) {
//                 console.log('Error');
//                 i--
//             } else {
//                 personalMovieDB.genres = genre.split(', ')
//                 personalMovieDB.genres.sort();
//             }
            
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Favorite genre ${i + 1} - this is ${item}`);
//         });
//     }
// }
















//============================  Урок 29


// const body = document.getElementsByTagName('body')
// console.log(body[0]);

// const div = document.createElement('div')
// div.style.borderRadius = '30px';
// div.style.width = '400px';
// div.style.backgroundColor = 'blue';
// div.style.padding = '40px';

// body[0].append(div)
// console.log(div);

// div.innerHTML = 'Hello Mazafaker'
// div.style.textAlign = 'center'
// div.style.color = 'white'















// ====================== Урок 35 - 37

// const p = document.querySelectorAll('p')
// console.log(p);


//========================
    
// const wrap = document.querySelector('.wrapper')
// wrap.addEventListener('click', (event) => {
//     if (event.target.matches('button.blue')) {                 //Метод matches
//             console.log('Hi');
//     } else {
//         console.log('Boom');
//         }
//     })








// ======================== Урок 45 - 46 - 47 
 // 45 Функции-конструкторы 

// function User(name, age, married) {
//     this.name = name;
//     this.age = age;
//     this.married = married;
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} вошел в данное устройство`);
// }

// const dan = new User('Dan', 23, true);
// const artem = new User('Artem', 17, false)

// dan.exit()
// artem.exit()


// console.log(dan);
// console.log(artem);

// ============================================================================
 // 46 Контекст This

// const obj = {
//     name: 'John',
// }
// const object = {
//     name: 'Jack'
// }
// function show(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// show.call(obj, 'Forsberg')
// show.apply(object, ['Poll'])
// show.bind(obj, 'Tell')()

// function calc(num) {
//     return this * num
// }
// let double = calc.bind(2)
// console.log(double(3));


// const btn = document.querySelector('.red')

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red'
// })

// const calc = (a) => a * 2
// console.log(calc(2));

// ============================================================================

// 47 Classes -

//There was a short lesson and I understood everything there and I didn't write a badge for it


// ====================================

// 49 Rest 

// const lg = function (a, b, ...other) {
//     console.log(a, b, other);
// }
// lg('basic', 'rest', 'operator', 'user')

// function calcOnDouble(number, basic) {
//     basic = basic || 2
//     console.log(number * basic);
// }
// calcOnDouble(3)



//=====================================

// 50 - 51 JSON

// let person = {
//     name: 'Mike',
//     number: '+380630253655',
//     parents: {
//         Mam: 'Lusy',
//         Dad: 'John'
//     }
// }

// const clone = JSON.parse(JSON.stringify(person))
// clone.parents.Dad = 'Drake'
// console.log(person);
// console.log(clone);


//=====================================

// 57 Урок


// Method Filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart']
//   const length = names.filter((name) => {
//     return name.length < 5;
// })
// console.log(length);


// Method Map 

// const names = ['Ivan', 'Amarry', 'lusy', 'tolya']
//  const result = names.map((name) => {
//         return name.toLowerCase()
//     })
// console.log(result);


// Method sort 

// const names = ['Ivan', 'Amarry', 'lusy', 'tolya']
//     names.sort()
// console.log(names);


// Method some

// const arr = [4, 'asfsdf', 'sdfsd']
// console.log(arr.some(item => {
//     return typeof (item) === 'number'
// }));


// Method every

//  const arr = [4, 'asfsdf', 'sdfsd']
//     console.log(arr.every(item => {
//         return typeof (item) === 'number'
//     }));


// Method reduce

// const arr = [1, 3, 4, 5, 1, 3]
// const result = arr.reduce((sum, current) => {
//     return sum + current
// })
// console.log(result);


// const arr = ['apple', 'orange', 'mango']
// const result = arr.reduce((sum, current) => {
//     return `${sum},  ${current}`
// })
// console.log(result);


// Method Concat

// const arr = ['apple', 'orange', 'mango']
// const arr2 = ['banana', 'pineapple', 'melon']

// const arr3 = arr.concat(arr2)
// console.log(arr3);




// Method Entries

// const obj = {
//     ivan: 'person',
//     cat: 'animal',
//     anna: 'person',
//     dog: 'animal'
// }

// const newArr = Object.entries(obj)
//     .filter((item) => {
//    return item[1] === 'person'
//     })
//     .map((item) => {
//         return item[0]
//     })
// console.log(newArr);







//======================================== Урок 68 Getters and Setters 


// const person = {
//     name: 'John',
//     age: 18,

//     get userName() {
//        return this.name && this.age 
//     },
    
//     set userName(write) {
//         this.name = write
//     }
// };
// console.log(person.userName = 'Dan');





//======================================== Урок 69 Инкапсуляция 


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surname = 'Mironyuk'

//     say = () => {
//         console.log(`My name is ${this.name} ${this.#surname} me ${this._age} years!`);
//     };
//     get ageFunc () {
//         return this._age
//     };
//     set ageFunc (age) {
//         if (typeof age === 'number' && age > 0 && age < 100) {
//             this._age = age
//         }
//         else {
//             console.log('Error');
//         }
//     }
// }

// const dan = new User('Dan', 23)
// console.log(dan);
// console.log(dan.ageFunc);
// dan.ageFunc = 200
// console.log(dan.ageFunc);
// console.log(dan.say());
// console.log(dan.surname);


// Анонимные функции

// const number = 2
// console.log(number);
    
// (function () {
//     let number = 2
//     console.log(number + 1);
// }())




//=========================== 79 Урок Функции-Генераторы

// function* generator() {
//     yield 'one'
//     yield 'two'
//     yield 'three'
//     yield 'four'
//     yield 'five'
// }

// const num = generator()
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());



// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7)
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);



// for (let k of count(8)) {
//     console.log(k);
// }