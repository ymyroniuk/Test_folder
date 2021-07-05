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