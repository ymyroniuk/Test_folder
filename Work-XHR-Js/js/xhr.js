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
