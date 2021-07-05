//let id = Symbol('id');
//let user = {
   // name: 'john',
 //   age: 30,
 //   [id]: 'what?'
//};
//console.log(user)

//Вложенность 
//let user = {
  //  name: 'john',
  //  age: 30,
    // address: {
      //  city: 'Kharkiv',
      //  street: 'Tupoleva'
   // }
 // }
//console.log(user)
//console.log(user.address)
//console.log(user.address.city)


//Свойство из переменной 
//function getData(name, age) {
  //  return {
    //    name: name,
      //  age: age,
    //}
//}
//let user = getData('john', 30 )
//console.log(user)

//Добавление в обьект
 //let user = {
   //  name: 'john' 
 //}
 //console.log(user)

 //user.age = 30
 //console.log(user)
 
// user['likes java script'] = 'true';
 //console.log(user)
 
//user.weight = 70
 //console.log(user)
 //user.address = {
   //  street: 'tupoleva',
     //city: 'Kyiv'
 //}
 //console.log(user)

 //удаление 
// let user =  {
  //  name: 'john',
   // age: 30
//}
// delete user.age
// console.log(user)

//Дублирование объектов через Object.assign()
//let user = {
  //  name: 'john',
    //age: 30
//}
//let userInfo = Object.assign({}, user)
//user.age = 23;
//console.log(userInfo);
//console.log(user)

//добавление с помощью  assign
//let user = {
  //  name: 'john',
   // age: 30,
//}
//Object.assign(user,{city: 'Kharkiv'});
//console.log(user)

//Проверка
//let user = {
  //  name: 'yarik',
   // age: 25,
//}
//if(user.age)
//console.log(user.age)

//for in example!

//let user =  {
  //  name: 'john',
   // age: 23,
   // address: {
    //    city: 'Kyiv',
     //   street: 'tupoleva',
   // }
//}
//for(let key in user) {
 //   console.log(key);
   //вывел ключи
   // console.log(user[key]) 
//}
//for(let key in user.address) {
  //  console.log(key)
    //вывел ключи 
   // console.log(user.address[key])
//}

//использование this
//let user =  {
  //    name: 'john',
   //   age: 23,
    //  address: {
     //    city: 'Kyiv',
      //    street: 'tupoleva',
      //},
  //showContent() {
    //  let show = () => console.log(`${this.name}, ${this.age}`)
     // show()
  //}
//}
//user.showContent()

//преимущества 
//let user = {
  //  name: 'john',
   // age: 21,
   // address: {
     //   city: 'Kyiv',
      //  street: 'Tupoleva',
   // },
   // showContent() {
     //   console.log(`${this.name}, ${this.age}, лет. Адрес: г.${this.address.city}, ${this.address.street}`);
    //}
//}
//user.showContent();

//let userr = user;
//user = null;
//userr.showContent();

//Функция конструктор 

//function UserInfo(name) {
  //  this.name = name;
   // this.age = 30;
//}
//console.log(new UserInfo('John'));
//console.log(new UserInfo('Harry'))







//let pow = Object.create(
 // {},
 // {
 // birthYear: {
 //   value: 2004,
 //   configurable: false
  //},
  //age: {
  //  get() {
  //    return new Date().getFullYear() - this.birthYear
  //  },
  //  set(value) {
  //   document.body.style.background = 'blue'
   //   console.log('Set age', value);
  //  }
 // }
//})
//console.log(get)


