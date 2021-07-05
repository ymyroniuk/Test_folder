//Гетераторы - по сути это функции  которые могут последовательно выдавать результат ее работы 





//function* numGenerator(n = 8) {
 //   for(i = 0; i <= n; i++) {
  //      yield i
  //  }
//}
//let num = numGenerator()
//console.log(num.next());







// let iterator = {
  //  [Symbol.iterator] ----------- gen(n = 10) {
   //     let i = 0
   //     return {
   //     next() {
   //         if(i < n) {
   //             return {value: ++i, done: false}
    //        }else {
    //            return {value: undefined, done: true }
    //        }
    //    }
   //   }
  //  }
//}
//let iter = iterator.gen()
//console.log(iter.next());



function* check(n = 7) {
    for(let i = 0; i <= n; i++) {
        yield i
    }
}
for(let k of check()) {
    console.log(k);
}