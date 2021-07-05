//let respon = ms => {
 //   return new Promise(response => setTimeout(() => response(), ms ))
//}

//let url = 'https://jsonplaceholder.typicode.com/todos'

//function fetchTo() {
 //   console.log('Fetch to do started')
  //   return respon(3000)
  //  .then(() => {
   //     return fetch(url)
   // })
   // .then(response => response.json())
//}
//fetchTo() 
//.then(data => {
 //   console.log('Data:', data);
//})
//.catch(err => console.error('error'))



// Работа с async or await


//let respon = ms => {
 //   return new Promise(response => setTimeout(() => response(), ms ))
//}

//let url = 'https://jsonplaceholder.typicode.com/todos'

 //async function fetchAsynsTo() {
  //  console.log('Fetch to do started...')
   // try {
   //     await respon(3000)
   //  let response = await fetch(url)
    // let data = await response.json()
    // console.log('Data:', data);
        
   // }catch(e) {
   //     console.error(e);
   // } finally {
   //   let pers = {
   //     name: 'Dan',
   //     age: 18,
    //    salary: 3700
     // }
    //    console.log(pers);
   // }
//}
 //fetchAsynsTo()











 //work with XHR
 



 //let requestURL = 'https://jsonplaceholder.typicode.com/users'

 //function sendRequest(method, url, body = null) {
  // return new Promise((resolve, reject) => {

 //let xhr = new XMLHttpRequest()

 //xhr.open(method, url)

 //xhr.responseType = 'json' 
 //xhr.setRequestHeader('Content-Type', 'application/json')
 

// xhr.onload = () => {
 //   if(xhr.status >= 400) {
 //      reject(xhr.response);
 //   } else {
  //     resolve(xhr.response);        //чтобы получить объект пишем method (JSON.parse(xhr.parse))
  //  }                 
// }
// xhr.onerror = () => {
//    reject(xhr.response);
// }
// xhr.send(JSON.stringify(body))
//   })
//}


// method GET


//sendRequest('GET', requestURL)
//.then(data => console.log(data))
//.catch(err => console.error(err))





// method POST

//let body = {
 //  name: 'Vlad',
 //  age: 18
//}
//sendRequest('POST', requestURL, body)
//.then(data => console.log(data))
//.catch(err => console.error(err))
