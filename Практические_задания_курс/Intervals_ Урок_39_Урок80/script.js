// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');
// let timerId;
// let posit = 0


//=================== Set and Time Intervals Урок- 39


// function myAnimation() {
//     const box = document.querySelector('.box')
//     let posit = 0

//     const time = setInterval(frame, 10)
//     function frame() {
//         if (posit == 300) {
//             clearInterval(time)
//         } else {
//             posit++
//             box.style.top = posit + 'px'
//             box.style.left = posit + 'px'
//         }
//     }
// }
// btn.addEventListener('click', myAnimation)



//=================== requestAnimationFrame Урок- 80

// function myAnimation() {

//     posit++
//     box.style.top = posit + 'px'
//     box.style.left = posit + 'px'

//     if (posit < 300) {
//         requestAnimationFrame(myAnimation)
//     }
// }
// btn.addEventListener('click', () => {
//     return requestAnimationFrame(myAnimation),
//     console.log('Bye');
// })

// let id = requestAnimationFrame(myAnimation);
// cancelAnimationFrame(id)


// btn.addEventListener('click', () => {
//    timerId = setInterval(logger, 2000)
// })


// function logger(i) {
//     if (i === 3) {
//         clearInterval(timerId)
//     }
//     console.log('Hello');
//     i++
// }

// let st = setTimeout( function lt() {
//     console.log('Goodbye');
//     st = setTimeout(lt, 500)
// }, 500)

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 2000)
//  })