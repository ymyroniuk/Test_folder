//let person = {
 //   name: 'Alex',
  //  age: 18,
   // hasCar: true
//}
//console.log(person);




//class Person {
 //   static pers = 'Hello'
  //  constructor(options) {
  //      this.name = options.name
  //      this.age = options.age
  //      this.hasCar = options.hasCar
  //  }

//}
//let data = new Person({
 //   name: 'Alex',
  //  age: 21,
  //  hasCar: true
//})

//class John extends Person {
 //   constructor(options) {
 //      super(options)
   //     this.salary = options.salary
   // }
   //get ageInfo() {
    //    return 2021 - this.age
   // }
   // set ageInfo(newAge) {
   //     this.age = newAge 
   // }
//}

//let info = new John ({
 //   name: 'John',
  //  age: 19,
   // hasCar: true,
   // salary: 3700
//})
//console.log(info);









//class Complex {
 //   constructor(selector) {
  //      this.$el = document.querySelector(selector)
  //  }
  //  hide() {
  //      this.$el.style.display = 'none'
  //  }
  //  show() {
  //      this.$el.style.display = 'block'
  //  }
//}
//class Content extends Complex {
//    constructor(options) {
//       super(options.selector)
 //       this.$el.style.width = this.$el.style.height = options.size + 'px'
  //      this.$el.style.backgroundColor = options.color
  //     this.$el.style.textAlign = 'center'
   //     this.$el.style.margin = '15px'
   // }
  //  }
//let box1 = new Content({
  //  selector: '#box1',
  //  size: 100,
  //  color: 'red'

//})
//let box2 = new Content({
 //   selector: '#box2',
  //  size: 120,
  //  color: 'blue'

//})
//class Circle extends Content{
  //  constructor(options) {
   //     super(options)
    //    this.$el.style.borderRadius = '50%'
    //    this.$el.style.margin = '5px'
   // }
//}
//let end = new Circle({
 //   selector: '#circle',
 //   size: 80,
 //   color: 'orange'
//})
















// class Person {

//   static type = 'Hello, my friend'

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.salary = options.salary
//     this.hasCar = options.hasCar
//   }
//   voice() {
//     console.log('Have are you?');
//   }
// }

// let pers = new Person({
//   name: 'John',
//   age: 21,
//   salary: 1870,
//   hasCar: true
// })


// class Friend extends Person {
//   constructor(options) {
//     super(options)
//     this.hasAnimal = options.hasAnimal
//   }
// }

// let friend = new Friend({
//   name: 'Dima',
//   age: 19,
//   salary: 1300,
//   hasCar: false,
//   hasAnimal: true
// })





// class Animal {
//   constructor(has) {
//     this.$el = document.querySelector('#has')
//   }

//   hide() {
//     this.$el.style.display = 'none'
//   }

//   show() {
//     this.$el.style.display = 'block'
//     this.$el.style.backgroundColor = 'orange'
//   }
// }

// class Cat extends Animal {
//   constructor(options) {
//     super(options.has)
//     this.$el.style.width = this.$el.style.height = options.size + 'px'
//     this.$el.style.borderRadius = '50%'
//     this.$el.style.backgroundColor = options.color
//     this.$el.style.margin = '10px'
//   }
// }

// let cat = new Cat({
//   has: '#has',
//   size: 80,
//   color: 'lightblue',
// })
















// =============================== Урок 23



// let soldier = {
//   health: 450,
//   armor: 125,
//   say: () => {
//     console.log('Hello');
//   }
// }

//======= Будет прототипно наследоваться

// const john = Object.create(soldier)


// let john = {
//   health: 150
// }

// Object.setPrototypeOf(john, soldier)
// console.log(john);




// Наследование

// class Programmer {
//   constructor(name) {
//     this.name = name
//   }
//   code() {
//     console.log(`${this.name} is coding...`);
//   }
// }

// class Frontend extends Programmer {
//   angular() {
//     console.log(`${this.name} is creating angular app...`);
//   }
// }

// class Backend extends Programmer {
//   node() {
//     console.log(`${this.name} is coding Node JS...`);
//   }
// }


// const programmer = new Programmer('Programmer')
// programmer.code();

// const frontend = new Frontend('Frontend');
// frontend.code()
// frontend.angular()

// const backend = new Backend('Backend');
// backend.code()
// backend.node()


// Композиция

// function createProgrammer(name) {
//   const programmer = {name}
//   return {
//     ...programmer,
//     ...canCode(programmer)
//   }
// }

// function canCode({name}) {
//   return {
//     code: () => console.log(`${name} is coding...`)
//   }
// }

// const programmer = createProgrammer('Kyrylo')
// programmer.code()


// function createProgrammer(name) {
//   const programmer = { name }
//   return {
//     ...programmer,
//     ...canCode(programmer)
//   }
// }

// function canCode({name}) {
//   return {
//     code: () => console.log(`${name} is coding...`)
//   }
// }

// function canAngular({name}) {
//   return {
//     angular: () => console.log(`${name} is creating Angular app...`)
//   }
// }

// function canNodeJS({name}) {
//   return {
//     nodejs: () => console.log(`${name} is creating NodeJs server...`)
//   }
// }

// function canReactandVue({ name }) {
//   return {
//     react: () => console.log(`${name} is creating React app...`),
//     vue: () =>  console.log(`${name} is creating Vue app...`)
//   }
// }

// function createBackend(name) {
//   const programmer = createProgrammer(name)
//   return {
//     ...programmer,
//     ...canNodeJS(programmer)
//   }
// }

// function createFrontend(name) {
//   const programmer = createProgrammer(name)
//   return {
//     ...programmer,
//     ...canAngular(programmer),
//     ...canReactandVue(programmer)
//   }
// }

// function createFullStack(name) {
//   const programmer = createProgrammer(name)
//   return {
//     ...programmer,
//     ...canAngular(programmer),
//     ...canNodeJS(programmer)
//   }
// }

// const programmer = createProgrammer('Jhon');
// programmer.code()

// const programmerFrontend = createFrontend('Alex');
// programmerFrontend.code()
// programmerFrontend.angular()
// programmerFrontend.react()
// programmerFrontend.vue()

// const programmerBackend = createBackend('Yarik');
// programmerBackend.code()
// programmerBackend.nodejs()

// const programmerFullStack = createFullStack('Artem');
// programmerFullStack.code()
// programmerFullStack.nodejs()
// programmerFullStack.angular()