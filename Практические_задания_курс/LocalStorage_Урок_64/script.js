// localStorage.setItem('name', 'John')  //Записывать туда данные 

// console.log(localStorage.getItem('name')) // Получить от туда данные

// localStorage.removeItem('1')  // Удалить от туда данные

// localStorage.clear() // Полностью удалить от туда данные


// const checkbox = document.querySelector('#checkbox');
// const form = document.querySelector('.form-signin');
// const button = document.querySelector('#color')

// if(localStorage.getItem('isChecked')) {
//     checkbox.checked = true;
// }

// if (localStorage.getItem('bg') === 'changed') {
//     form.style.backgroundColor = 'lightblue'
// }

// checkbox.addEventListener('change', () => {
//     localStorage.setItem('isChecked', true)
// })

// button.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'changed') {
//         localStorage.removeItem('bg');
//         form.style.backgroundColor = 'white';
//     } else {
//         localStorage.setItem('bg', 'changed')
//         form.style.backgroundColor = 'lightblue';
//     }
// })

// const person = {
//     name: 'Alex',
//     age: 45
// }

// const confidentPerson = JSON.stringify(person)
// localStorage.setItem('man', confidentPerson)
// console.log(JSON.parse(localStorage.getItem('man')));