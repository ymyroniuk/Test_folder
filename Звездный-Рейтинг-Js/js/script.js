"use strict"

let ratings = document.querySelectorAll('.rating');

if(ratings.length > 0 ) {
    initRatings()
}

//Основаня функция

function initRatings() {
    let ratingActive, ratingValue;

    //Бегаем по всем рейтингам на странице 

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating)
    }


    //Инициализируем конкретный рейтинг

    function initRating(rating) {
        initRatingVars(rating);

        getRatingActiveWidth();

        if(rating.classList.contains('rating_set')) {
            setRating(rating)
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value')
    }

    //Изменяем ширину активных звезд

    function getRatingActiveWidth(index = ratingValue.innerHTML) {
        let ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

                //Возможность указать оценку
     
    function setRating(rating) {
        let ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            let ratingItem = ratingItems[index];
            ratingItem.addEventListener('mouseenter', function(e) {

                //Обновляю переменные 

                initRatingVars(rating);

                //Обновление активных звезд

                getRatingActiveWidth(ratingItem.value);
            });   

            ratingItem.addEventListener('mouseleave', function(e) {

                //Обновление активных звезд
                getRatingActiveWidth();
            });

            ratingItem.addEventListener('click', function(e) {
                initRatingVars(rating)

                //Send to server

                if(rating.dataset.ajax) {
                    getRatingValue(ratingItem.value, rating)
                }else {

                    //Отобразить указанную оценку 

                    ratingValue.innerHTML = index + 1
                    getRatingActiveWidth();
                }
            })
        }
    }
}