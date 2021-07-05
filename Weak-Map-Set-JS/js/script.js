//let obj = {
 //   name: 'Alex',
  //  age: 24,
  //  salary: 1500
//}


//method entries and method fromEntries

//let entries = [
 //   ['name', 'Alex'],
  //  ['age', 24],
  //  ['salary', 1500]
//]
//console.log(Object.entries(obj));
//console.log(Object.fromEntries(entries));


// Работа с Map 


//let map = new Map(entries)
//console.log(map.get('salary'));
//map 
//.set(obj, 'Value of object')              // method set
//.delete('salary')                      // method delete
//console.log(map.size);                 // method size 
//map.clear()
//console.log(map);






 //let pers = [
 //   {name: 'Alex'},
 //  {name: 'Julia'},
  //  {name: 'Vika'}
//]


//let data = new Map()
//data 
//.set(pers[0], new Date())
//.set(pers[1], new Date(new Date().getTime() + 1000 * 60))
//.set(pers[2], new Date(new Date().getTime() + 2000 * 60))

//function calcDate(user) {
 //   return data.get(user)
//}
//console.log(calcDate(pers[1]));


















// Работа с Set



//let set = new Set([1, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7 ])
//set.add(10).add(20).add(30).add(30)
//console.log(set.has(10))
//console.log(set); 




//function deleteDuplicate(array) {
 //   return  Array.from(new Set(array))
//}
//console.log(deleteDuplicate([1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6]));














//Работа с Weak map 




//let  obj = {name: 'Vlad'}
//let arr = [obj]
//obj = null
//console.log(arr[0]); 



//let cash = new WeakMap()
//function cashUser(user) {
 //   if(!cash.has(user)) {
  //      cash.set(user, Date.now())
  //  }
  //  return cash.get(user)
//}
//let alex = {name: 'Alex'}
//let julia = {name: 'Julia'}

//cashUser(alex)
//cashUser(julia)

//alex = null

//console.log(cash.has(alex));
//console.log(cash.has(julia));













//Работа с  Weak Set


//let users = [
  //  {name: 'Julia'},
  //  {name: 'Artem'},
  //  {name: 'Alex'}
//]
//let set = new WeakSet()
//set.add(users[0])
//set.add(users[1])

//users.splice(1, 1, {name: 'Ivan'})

//console.log(set.has(users[0]));
//console.log(set.has(users[1]));

//console.log(users[1]);

