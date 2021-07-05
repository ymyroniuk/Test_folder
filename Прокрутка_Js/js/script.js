
// Размеры окна браузера 
// Включая прокрученную часть 

//clientWidth and clientHeight

//let mainElement = document.documentElement;
//let mainElementWidth = mainElement.clientWidth;
//let mainElementHeight = mainElement.clientHeight;

//console.log(mainElementWidth);
//console.log(mainElementHeight);

//let windowWidth = window.innerWidth;
//let windowHeight = window.innerHeight;

//console.log(windowWidth);
//console.log(windowHeight);



// Включая прокрученную часть 


//let scrollWidth = Math.max( 
 //   document.body.scrollWidth, document.documentElement.scrollWidth,
  //  document.body.offsetWidth, document.documentElement.offsetWidth,
  //  document.body.clientWidth, document.documentElement.clientWidth
//);

//let scrollHeight = Math.max(
 //   document.body.scrollHeight, document.documentElement.scrollHeight,
 //   document.body.offsetHeight, document.documentElement.offsetHeight,
  //  document.body.clientHeight, document.documentElement.clientHeight 
//)

//console.log(scrollWidth);
//console.log(scrollHeight);





// Получить кол-во прокрученных пикселей 
// Только для чтения



let windowScrollTop = window.pageYOffset;
let windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);




//Управляю прокруткой методом scrollBy(x, y),
// прокручивает страницу относительно ее текущего положения



function setScrollBy() {
    window.scrollBy(0, 50);
    let windowScrollTop = window.pageYOffset;
    console.log(windowScrollTop);
}





// у прокрутки есть свои параметры 
// auto -  по умолчанию
// smooth -  медленно
//instant - быстро






function setScrollTo() {
        window.scrollTo({top:10, left:0, behavior: 'smooth'});


     let windowScrollButton = window.pageYOffset;
        console.log(windowScrollButton);
    }




function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
    })
}




// При нажатии позволяет прокрутить до определенного элемента 
// method scrollItoView


function setScrollIntoView(top) {
    let selectedItem = document.querySelector('.lesson__selected'); 
    selectedItem.scrollIntoView(top);
}


function setScrollIntoViewOptions(top) {
   let selectedItem = document.querySelector('.lesson__selected');
    selectedItem.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}





//Запретить прокрутку


function setEnableDisableScroll() {
    document.body.style.overflow = 'hidden'

         // либо через класс в css

      document.body.classList.add('scroll-lock')                    // но можно и через метод toggle 
}








