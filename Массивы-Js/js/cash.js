// function factorial(num) {
//     let result = 1
//     while (num !== 1) {
//         result *= num
//         num -= 1
//     }
//     return result
// }
// console.log(factorial(5));



// class LinkedList {
//     constructor() {
//         this.size = 0
//         this.root = null
//     }

//     add(value) {
//         if (this.size === 0) {
//             this.root = new Node(value)
//             this.size += 1
//             return true
//         }
//         let node = this.root
//         while (node.next) {
//             node = node.next
//         }
//         let newNode = new Node(value)
//         node.next = newNode
//         this.size += 1
//     }

//     getAll() {
//         return this.size
//     }

//     print() {
//         let result = []
//         let node = this.root
//         while (node) {
//             result.push(node.value)
//             node = node.next
//         }
//         console.log(result);
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// const list = new LinkedList()
// list.add(5);
// list.add(4);
// list.add(3);
// list.add(2);
// list.add(1);
// list.add(0);

// list.print();



// function fibonachi(n) {
//     if (n <= 0) {
//         return 0
//     }
//     if (n <= 2) {
//         return 1
//     }
//     return fibonachi(n - 1) + fibonachi(n - 2)
// }
// console.log(fibonachi(7));

// kyiv, minsk, kazan

// const concerts = {
//     'Moscow': new Date('2020-04-02'),
//     'Kyiv': new Date('2021-11-04'),
//     'Saint-Petersburg': new Date('2021-05-08'),
//     'Kazan': new Date('2021-10-17'),
//     'Minsk': new Date('2022-02-22'),
//     'Kharkov': new Date('2020-06-15')
// }

// const city = [];
// for (const value in concerts) {
//     if (concerts[value] > new Date(Date.now())) {
//         city.push(value)
//         city.sort()
//     }
// }
// console.log(city);




// function concertsToArray(concerts) {
//     return Object.keys(concerts)
//         .filter((city) => concerts[city] > new Date())
//         .sort()
// }
// console.log(concertsToArray(concerts));



// const arr = [ 1, 1, 1, 2, 1, 1 ]

// function resultUnique(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         let count = 0;
//         for (let j = 0; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 count++
//             }
//         }
//         if (count === 1) {
//             result.push(array[i])
//             return Number(result)
//         }
//     }
//     return result    // result
// }
// console.log(resultUnique(arr));



// function findUniq(arr) {
// //   let newArr = []
//   arr.sort()
//   return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
// }



// function fc(x) {
//     console.log(typeof x);
//     console.log(arguments.length);
// }
// console.log(fc());
// console.log(fc('1', '2', '3'));