// Методы массивов

//  let people = [
//     {name: 'John', age: 21, salary: 3000},
//     {name: 'Dan', age: 23, salary: 10000},
//     {name: 'Tolik', age: 33, salary: 6500},
//     {name: 'Maks', age: 30, salary: 2000},
//     {name: 'Ivan', age: 27, salary: 4400},
//     {name: 'Julia', age: 38, salary: 3900}
// ]
//for(let i = 0; i < people.length; i++) {
 //   console.log(people[i]);
//}



//  for(let person of people) {
//    console.log((person));
// }




// Первый метод будет  forEach

 // people.forEach((person) => {          //index, pArray
  //  console.log(person);
  //  console.log(index);
   // console.log(pArr);
//})




// Второй метод будет map


// let newPerson  = people.map(person => {
//    return `${person.name} (${person.age})`
// })
// console.log(newPerson);








// Третий метод будет  filter

//let adults = people.filter(person => {
 //   if(person.age > 29) {
  //      return true
  //  }
//})
//console.log(adults);



// const arr = [12, 45, 128, 11, 8, 96]

// const bigNum = (elem) => elem > 11;

// const arr2 = arr.filter(bigNum)
// console.log(arr2);






//Четвертый метод будет reduce



// С помощью for

//let amount = 0
 //  for (let i = 0; i < people.length; i++) {
  //  amount += people[i].salary
//}
//console.log(amount);






// С помощью reduce 


 //let addperson = people.reduce((total, person) => {
  //   return total + person.salary
 //}, 0)
// console.log(addperson);




// const arr = ['apple', 'banana', 'peach', 'strawberry', 'apple', 'banana']

// let obj2 = arr.reduce((acc, elem) => {
//   if (acc[elem]) {
//     acc[elem] += 1;
//   } else {
//     acc[elem] = 1
//   }
//   return acc
// }, {})

// console.log(obj2);





//Пятый метод будет find

//let pers = people.find(person => person.name === 'Dan')
  //{ 
//return person.name === 'Dan'
//})
//console.log(pers);





//Шестой метод будет findIndex


//let pers = people.findIndex(person => {
 //   return person.age === 30
//})
//console.log(pers);






//======================== Задачки 


//let amount = people
//.filter(person => {
  //  return person.salary < 4000       //.age < 30
//})
//.map(person => {
 //   return {
  //      info: `${person.name} (${person.age})`, 
   //    salary: person.salary                   // `${person.salary}`
   // }
//})
//.reduce((total, person) => {
 //   return total + person.salary 
//},0)
//console.log(amount);












//============================ Задачка 2 
//Пересечение двух массивов  


// let num1 = [1, 2, 2, 1]
// let num2 = [2, 2]

// let num3 = [4, 9, 5]
// let num4 = [4, 9, 4, 8, 9]

// let intersect = function (nums1, nums2) {
//   let result = []

//   let map = nums1.reduce((acc, i) => {
//     acc[i] = acc[i] ? acc[1] + 1 : 1;
//     return acc
//   }, {})
  
//   for (let i = 0; i < nums2.length; i++) {
//     let current = nums2[i];
//     let count = map[current]
    
//     if (count && count > 0) {
//       result.push(current)
//       map[current] -= 1
//     }
//   }

//   return result;
// }

// console.log(intersect(num1, num2));
// console.log(intersect(num3, num4));












//=========================== Урок 21


// let arr = [1, 2, 3, 6, 8, 10];


// arr.sort(sortNum)
// console.log(arr);

// function sortNum(a, b) {
//  return a - b
// } 

// arr.pop()
// arr.push(8)
// console.log(arr);

// for (let value of arr) {
//   if (value == 6) {
//     continue
//   }
//     console.log(value);
// }

// arr.forEach((elem, i, arr) => {
//    console.log(`${i}: ${elem} Inside the array ${arr}`);
  
// });

// let res = arr.filter((num) => {
//   return  num < 6
// })
// console.log(res);

// console.log(arr.fill(4));

// let str = prompt('', '');
// let products = str.split(', ')
// console.log(products.join('; '));














// ====================== Задачка


// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

// let persistence = (num) => {
//  let i = 0
//  while (num.toString().length !== 1) {
//    num = num.toString().split("").reduce((a, b)=> a * b);
//    i++
//  }
//  return i
//  }
//  console.log(persistence(39));



// function persistence (num)  {
//   let i = 0
//   while (num.toString().length !== 1) {
//     num = num.toString().split("").reduce((a, b)=> a * b);
//     i++
//   }
//   return i
//   }
//   persistence(39)
 



// const array = ['Alex', 'Mark', 'Artem', 'Mark', 'Alex'];

// const arr = [...new Set(array)]

// const arr = Array.from(new Set(array))


// let debug = []
// const arr = array.filter((item, index) => {
  // debug.push({item, index, indexOf: array.indexOf(item)})
  // return index === array.indexOf(item)
// })
// console.table(debug);
// console.log(arr);

// const arr = array.reduce((uniq, item) => {
//  return uniq.includes(item) ? uniq : [...uniq, item]
// }, [])
// console.log(arr);





// const array = ['Alex', 'Mark', 'Artem', 'Mark', 'Alex'];

// const copy = [];

// for (let i = 0; i < array.length; i++) {
//     copy.push('New ' + array[i])
// }
// console.log(copy);

// array.forEach((item, index) => {
//     copy.push(index, 'New ' + item)
// })
// console.log(copy);




// const arr = [4, 2, 1, 2, 1, 4, 55]

// const arr2 = (nums) => {
//   let uniq = new Set()
//   let uniqSum = 0;
//   let numSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     if (!uniq.has(current)) {
//       uniq.add(current)
//       uniqSum += current
//     }
//     numSum += current;
//   }
//   return uniqSum * 2 - numSum
// }

// console.log(arr2(arr));



// вариант 2


// const arr = [4, 2, 1, 2, 1, 4, 55]

// const arr2 = (nums) => {
//   let uniq = Array.from(new Set(nums))

//   let reduceSum = (acc, elem) => acc + elem;
//   let uniqSum = uniq.reduce(reduceSum); // 62
//   let numSum = nums.reduce(reduceSum); // 69
 
//   return uniqSum * 2 - numSum
// }

// console.log(arr2(arr));



// const arr = [
//   { name: 'Alex', age: 45, salary: 3200 },
//   { name: 'Andre', age: 45, salary: 3200 },
//   { name: 'Ruslan', age: 45, salary: 3200 },
//   { name: 'Oleg', age: 45, salary: 3200 },
// ]

// let names = arr.reduce((acc, current) => {
//   if (current.name) {
//     acc[current.name] = current.name
//   }
//   return acc
// }, {})
// console.log(names);




// Sorting on select


// const arr = [8, 25, 45, 12, 63, 64, 78, 15, 47, 99, -1, 1, 4, 6, 44, 88, 23, 29, 67]

// let count = 0
// function selectorSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     let indexMin = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[indexMin]) {
//         indexMin = j 
//       }
//       count += 1
//     }
//     let tmp = array[i]
//     array[i] = array[indexMin]
//     array[indexMin] = tmp
//   }
//   return array
// }
// console.log(selectorSort(arr));
// console.log(count);




// Buble sort

// const arr = [8, 25, 45, 12, 63, 64, 78, 15, 47, 99, -1, 1, 4, 6, 44, 88, 23, 29, 67]
// let count = 0

// function bubleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j + 1] < array[j]) {
//         let tmp = array[j]
//         array[j] = array[j + 1]
//         array[j+1] = tmp
//         }
//         count += 1
//     }  
//   }
//   return array
// }
// console.log(bubleSort(arr));
// console.log(count);



// Sort Hoara

// const arr = [8, 25, 45, 12, 63, 64, 78, 15, 47, 59, 1, 4, 6, 44, 88, 23, 29, 67, 99]
// let count = 0

// function hoaraSort(array) {
//   if (array.length <= 1) {
//     return array
//   }
//   let pivotIndex = Math.floor(array.length / 2);
//   let pivot = array[pivotIndex]
//   let less = [];
//   let greater = [];
//   for (let i = 0; i < array.length; i++) {
//     count += 1
//     if (i === pivotIndex)
//       continue
//     if (array[i] < pivot) {
//       less.push(array[i])
//     } else {
//       greater.push(array[i])
//     }
//   }
//   return [...hoaraSort(less), pivot, ...hoaraSort(greater)];
// }
// console.log(hoaraSort(arr));
// console.log(count);




// Binary search 

// const arr = [8, 25, 45, 12, 63, 64, 78, 15, 47, 59, 1, 4, 6, 44, 88, 23, 29, 67, 99]
// let count = 0;


// function recursiveBinarySearch(array, item, start, end) {
//   let middle = Math.floor((start + end) / 2)
//   count += 1
//   if (item === array[middle]) {
//     return middle
//   }
//   if (item < array[middle]) {
//     return recursiveBinarySearch(array, item, start, middle - 1)
//   } else {
//     return recursiveBinarySearch(array, item, middle + 1, end)
//   }
// }
// console.log(recursiveBinarySearch(arr, 59, 0, arr.length)); //?
// console.log(count); 




//Queue - очередь

// const graph = {};
// graph.a = ['b', 'c']
// graph.b = ['f']
// graph.c = ['d', 'e']
// graph.d = ['f']
// graph.e = ['w']
// graph.f = ['s']
// console.log(graph);

// function breadthSearch(graph, start, end) {
//     let queue = [] 
//   queue.push(start)
//   while (queue.length > 0) {
//     const current = queue.shift()
//     if (!graph[current]) { 
//       graph[current] = [] 
//     }
//     if (graph[current].includes(end)) {
//       return true 
//     } else {
//        queue = [...queue, ...graph[current]]
//     }
//   }
// }
// console.log(breadthSearch(graph, 'a', 's'));



// Search the shortest path in the column


// const graph = {};
// graph.a = { b: 2, c: 1}
// graph.b = {f: 7}
// graph.c = {d: 5, e: 3}
// graph.d = { f: 2 }
// graph.e = { w: 1 }
// graph.f = { s: 3 }
// graph.g = {}

// function shortGraph(graph, start, end) {

// }
// console.log(graph);




const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v:11,
          }
        ]
      },
      {
        v: 7,
        c: [
          {
            v:1
          }
        ]
      }
    ]
  },
  {
    v: 5,
    c: [
      {
        v: 10
      },
      {
        v: 15
      }
    ]
  }
]


// const recurciveNum = (tree) => {
//   let sum = 0
//   tree.forEach((node) => {
//     sum += node.v

//     if (!node.c) {
//       return node.v
//     }

//     sum += recurciveNum(node.c)
//   })
//   return sum
// }
// console.log(recurciveNum(tree));


// const iteration = (tree) => {
//   if (!tree.length) {
//     return 0
//   }
//   let sum = 0;
//   let stack = [];
//   tree.forEach((node) => {
//     stack.push(node)
//   });
//   while (stack.length) {
//     const node = stack.pop()
//     sum += node.v
//     if (node.c) {
//       node.c.forEach(child => stack.push(child))
//     }
//   }
//   return sum
// }
// console.log(iteration(tree));



// function createPhoneNumber(numbers) {
//   let phone = "(xxx) xxx-xxxx"
//   for (let i = 0; i < numbers.length; i++) {
//     phone = phone.replace('x', numbers[i])
//   }
//   return phone
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));









// function spinWords(string){
//   const message = string.split(' ')
//   let result = ''
//   message.map((str, i) => {
//     if (str.length >= 5) {
//       message[i] = str.split('').reverse().join('')
//     } else {
//       message[i] = str
//     }
//     result = message.join(' ')
//   })
//   return result
// }
// console.log(spinWords('Welcome to the my street'));





// function digital(numbers) {
//   let result = 0
//   String(numbers).split('').map((num) => {
//     result += Number(num)
//   })
//   return result > 10 ? digital(result) : result
// }
// console.log(digital(10));