// 'use strict';

window.addEventListener('DOMContentLoaded', () => {

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//================= Вариант 1(1)
// const genre = document.querySelector('.promo__genre')
// genre.innerHTML = 'Драма'



//================ Вариант2(1)

// const genre = document.querySelector('.promo__genre');
// genre.textContent = 'Драма'





//====== Вариант 1(2)
// const promo = document.querySelector('.promo')
// const deletePromo = promo.querySelector('.promo__adv')
// deletePromo.remove()

//====== Вариант 2(2)

// const deletePromo = document.querySelector('.promo__adv')
// const deleteImg = deletePromo.querySelector('.promo__adv-title')
// deletePromo.remove()



//======= Вариант 3(2)

// const deletePromo = document.querySelectorAll('.promo__adv img')
// deletePromo.forEach((item) => {
//     item.remove()
// })



const deletePromo = document.querySelectorAll('.promo__adv img')
const deletePromos = (arr) => {
    arr.forEach((item) => {
        item.remove()
    })
}


const genre = document.querySelector('.promo__genre')
const bg = document.querySelector('.promo__bg')
const makeChanges = () => {
    bg.style.backgroundImage = 'url(img/bg.jpg)';
    genre.innerHTML = 'Драма'
};



//========= Вариант 2(3) На половину рабочий

// let removeBg = document.querySelector('.promo__bg')
// let bg = document.createElement('div')
// bg.style.backgroundImage = 'url(img/bg.jpg)';
// bg.classList.add('promo__bg')
// removeBg.replaceWith(bg)





//===========  Вариант 1(4 - 5)

// const moviesList = document.querySelector('.promo__interactive-list')

// moviesList.innerHTML = '';
// movieDB.movies.sort()
// movieDB.movies.forEach((film, i) => {
//     moviesList.innerHTML += ` <li class="promo__interactive-item">${i + 1} ${film}
//     <div class="delete"></div>
//     </li>`
// })

const moviesList = document.querySelector('.promo__interactive-list')
const addForm = document.querySelector('.add')
const addInput = addForm.querySelector('.adding__input')
const checkBox = addForm.querySelector('.check')

    
    function sortArr (arr) {
       arr.sort()
    }


    addForm.addEventListener('submit', (event) => {
        event.preventDefault()

        let newFilm = addInput.value;
        let favority = checkBox.checked

        if (newFilm) {
            if (newFilm.length > 21) {
                `${newFilm.substring(0, 22)}...`
            }
            if (favority) {
                console.log('Add your favority movie');
            }
        }
        movieDB.movies.push(newFilm)
        sortArr(movieDB.movies)
        event.target.reset()

        createMoviesList(movieDB.movies, moviesList)
    })

    function createMoviesList(films, parent) {
        parent.innerHTML = '';
        sortArr(films)

        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>`
        })
       let deleting =  document.querySelectorAll('.delete')
        deleting.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)

                createMoviesList(films, parent)
                })
            })
    }
    deletePromos(deletePromo)
    makeChanges()
    sortArr(movieDB.movies)
    createMoviesList(movieDB.movies, moviesList)
})