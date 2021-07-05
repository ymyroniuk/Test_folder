 //Wor with Fetch 

 //Method GET


 //let requestURL = 'https://jsonplaceholder.typicode.com/users'

 //function sendRequest(method, url, body = null) {
  // return fetch(url)
  // .then(response => {
  //   return response.json()
  // })
 //}

 //sendRequest('GET', requestURL)
 //.then(data => console.log(data))
 //.catch(err => console.log(err))

 //let body = {
  // name: 'Vlad',
  // age: 21
 //}







 


 // method POST

//function sendRequest(method, url, body = null) {
 // let headers = {
  //    'Content-Type': 'application/json'
  //}
  //return fetch(url, {
  //   method: method,
  //   body: JSON.stringify(body),
 //    headers: headers
 // }).then(response => {
 //     if(response.status <= 400) {
   //       return response.json()
   //   } 
   //   return response.json().then(error => {
   //       let err = new Error("Sorry it's Error")
   //       err.data = error
   //       throw err
  //    })
 // })
//}



//let body = {
 //  name: 'Vlad',
 //  age: 18
//}


//sendRequest('POST', requestURL, body)
//.then(data => console.log(data))
//.catch(err => console.error(err))