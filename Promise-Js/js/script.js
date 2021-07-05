//console.log('Hi bro');

//setTimeout(() => {
 //   console.log('Hi!');



//let person = {
 //   name: 'Dan',
  //  age: 18,
  //  salary: 3700
//}
//setTimeout(() => {
//    console.log('Have are you?', person)
//}, 2000);
//}, 2000);




//Щас с помощью Promise

//let p = new Promise((resolve, reject) => {                     // глобальный класс Promise
  //  setTimeout(() => {
   //    console.log('Boomm shaka laka'); 
   //    let person = {
   //       name: 'Dan',
   //       age: 18,
    //      salary: 3700
    //   }
   //    resolve(person)
  //  }, 2000);
//})
//p.then(data => {
 //  return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //         data.modified = true
  //         resolve(data)
  //     }, 2000);
  // })

     //////// One option
  // pm.then(clientData => { 
   //    console.log('Haappy end', clientData)
//}) 

//})
//.then(clientData => {
 //  // console.log('Happy end', clientData)
  //  clientData.fromPromise = true
   // return clientData
//})
//.then(data2 => {
  //  console.log('Good jobs', data2);
//})
//.catch(err => console.error('Error:', err))              //метод catch
//.finally(() => console.log('Finish'))                    //method finally












//let time = ms => {
  //  return new Promise(resolve => {
   //    setTimeout(() => resolve(), ms)    
   // })
//}
//time(2000).then(() => console.log('After 2 second'))
//time(3000).then(() => console.log('After 3 second'))


//or у Промиса есть method all

//Promise.all([time(5000)])
//.then(() => {
 //   console.log('All the best');
//}) 



//or у Промиса есть method race
//Promise.race([time(2000), time(4000)])
//.then(() => {
 //   console.log('I want to see');
 //   console.log('All the movie');
//})