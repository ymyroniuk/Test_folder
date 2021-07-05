// Obj 

//let person = {
  //  name: 'Dan', 
  //  age: 18,
  //  work: 'Frontend'
//}
//let op = new Proxy(person, {

    //method get proxy

 //   get(target, prop) {
  //     // console.log(`Getting prop ${prop}`);
  //      return target[prop]
  //  },

    // method set proxy

  //  set(target, prop, value) {
   //     if(prop in target) {
   //         target[prop] = value
   //     } else {
   //         throw new Error(`No ${prop} field in target`)
   //     }
   // },

   // has(target, prop) {
   //     return['name', 'age', 'work'].includes(prop)
   // },

   // deleteProperty(target, prop) {
   //     console.log('Deleting...', prop)
   //     delete target[prop]
   //     return true
   // }
//})








//Function


//let log = text => `log: ${text}`

//let fp = new Proxy(log, {
 //   apply(target, thisArg, args) {
  //      console.log('Calling fn...');
      
//       return target.apply(thisArg, args).toUpperCase()
 //   }
//});












//Classes

//class Person {
 // constructor(name, age) {
 //   this.name = name
 //   this.age = age
//  }
  
//}
//let personProxy = new Proxy(Person, {
//  construct(target, args) {
 //   console.log('Construct...')

  //  return new target(... args) 
     // get(targ, prop ) {
      //  console.log(`Getting prop '${prop}'`);
     //  return targ[prop]
  // } 
   // })
  //  })
    
  //}
//})
//let pers = new personProxy('Dan', 31)
//console.log(pers);











//Практика


//let withDefaultValue = (target, defaultValue = 0) => {
 // return new Proxy(target, {
  //  get: (obj, prop) => 
  //  (prop in obj) ? obj[prop] : defaultValue 
  //  })
 // }

 // let position = withDefaultValue(
 //   {
  //    x: 21,
   //   y: 26

  //  },0)






   //  console.log(position);





   //Hiden properties


  // let withHiddenProps = (target, prefix = '_' ) => {
   //  return new Proxy(target, {
       //method has
   //    has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)), 
       //method ownKeys
     //  ownKeys: obj => Reflect.ownKeys(obj)
     //  .filter(p => !p.startsWith(prefix)),
       //method get
    //   get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : undefined
   //  })
 //  }

  // let res = withHiddenProps({
  //   name: 'John',
  //   age: 21,
  //   _salary: 13500

  // })







   //Optimizator

   //Method find - перебирает весь массив с помощью определенного условия  
    //userData.find(user => user.id === 3)

   


   // let IndexArray = new Proxy(Array,  {
    //  construct(target, [args]) {
    //    let index = {}
    //    args.forEach(item => (index[item.id] = item))

  //      return new Proxy(new target(...args), {                // ...- Spread syntax
   //       get(arr, prop) {
   //         switch (prop) {
    //          case 'push' : 
    //          return item => {
    //            index[item.id] = item
    //            arr[prop].call(arr, item)
    //          }
    //          case 'findById' : 
    ///          return id => index[id]
    //          default:
    //             return arr[prop]
    //        }
    //      }
    //    })

    //  }
   // }) 
   // let users = new IndexArray([
   //  {id: 1, name: 'Dan', work: 'Frontend', age: 21},
   //  {id: 2, name: 'Mark', work: 'Backend', age: 29},
   //  {id: 3, name: 'Artem', work: 'FullStack', age: 25},
   //  {id: 4, name: 'Julia', work: 'Freelancer', age: 23},
    //])


    


     

    //let index = {}
    //userData.forEach(i => (index[i.id] = i))