'use strict'

//Ждем загрузку контента

window.onload = function() {
    let parallax = document.querySelector('.parallax');

    if(parallax) {
        let content = document.querySelector('.parallax__container');
        let clouds = document.querySelector('.images-parallax__clouds');
        let mountains = document.querySelector('.images-parallax__mountains');
        let human = document.querySelector('.images-parallax__human')

        //Коэффициенты 

        let forClouds = 40;
        let forMountains = 20;
        let forHuman = 10;


        //Скорость анимации

        let speed = 0.05;



        //Объявление переменных 

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;


        function setMouseParallaxStyle() {
            let distX = coordXprocent - positionX;
            let distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();



        parallax.addEventListener("mousemove", function(e) {

        //Получение ширины и высоты блока

        let parallaxWidth = parallax.offsetWidth;
        let parallaxHeight = parallax.offsetHeight;



        //Ноль по середине

        let coordX = e.pageX - parallaxWidth / 2;
        let coordY = e.pageY - parallaxHeight / 2;



        //Получаем проценты 


        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;

    });

        let thresholdSets = [];
        for(let i = 0; i <= 1.0; i += 0.05) {
            thresholdSets.push(i);
        }
        let callback = function(entries, observer) {
            let scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemStyle(scrollTopProcent);
        };
        let observer = new IntersectionObserver( callback, {
            threshold: thresholdSets
        });

        observer.observe(document.querySelector('.content'));

        function setParallaxItemStyle(scrollTopProcent) {
            content.style.cssText = `transform: translate(0%, -${scrollTopProcent / 9}%);`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
        }






    }
}