// const clicked = document.querySelectorAll('.clickedButt')
// const clicked = document.querySelector('.clickedButt')
// const block3 = document.querySelector('.block_Inner-inner')
// const block2 = document.querySelector('.blockInner')
// const block = document.querySelector('.block')
// const lesson = document.querySelector('.lesson')
// const menuBody = document.querySelector('.menu')
// const link = document.querySelector('.googleTranslate')

// const options = {
//     'capture': false,
//     'once': true,
//     'passive': false
// }

// function showConsole(event) {
//     if (event.target.closest('.menu_button')) {
//         menuBody.classList.toggle('_active')
//     }
//     if (!event.target.closest('.menu')) {
//         menuBody.classList.remove('_active')
//     }
    // console.log('Hello Mazafaka');
    // console.log(event.type);
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(event.clientX);
    // console.log(event.clientY);
    // console.log(event);
    // clicked.removeEventListener('click', showConsole)
// }

// clicked.addEventListener('click', showConsole, options);

// clicked.addEventListener('mouseenter', showConsole)

// block.addEventListener('click', () => {
//     console.log('Block one');
// });

// block2.addEventListener('click', () => {
//     console.log('Block 2');
// });

// block3.addEventListener('click', () => {
    // console.log('Block 3');
    // event.stopPropagation()
// });

// clicked.forEach((item) => {
//     item.addEventListener('click', showConsole)
// })

// lesson.addEventListener('click', (event) => {
//     if (event.target.closest('.clickedButt')) {
//         showConsole()
//     }
// })

// clicked.addEventListener('mousedown', (event) => {
//     console.log(`Clicked button ${event.which}`);
// })

// clicked.addEventListener('click', (event) => {
//     console.log('Нажата основная кнопка мыши ');
// })

// clicked.addEventListener('contextmenu', (event) => {
//     console.log('Вызвано контекстное меню(не основная кнопка мыши)');
// })

// link.addEventListener('click', (event) => {
//     console.log('Open link');
//     event.preventDefault()
// })


// document.addEventListener('keydown', (event) => {
//     console.log(`Enter ${event.code} (${event.key})`);
//     console.log(event.repeat);
// })

// document.addEventListener('click', showConsole)

// document.addEventListener('keyup', (event) => {
//     if (event.code === 'Escape') {
//         menuBody.classList.remove('_active')
//     }
// })


// window.addEventListener('beforeunload', beforeUnload)

// function beforeUnload(event) {
//     event.preventDefault()
//     event.returnValue = '';
// }