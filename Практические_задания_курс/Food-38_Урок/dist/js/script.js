window.addEventListener('DOMContentLoaded', () => {
    // ========== Tabs 
    const tabs = document.querySelectorAll('.tabheader__item')
    const tabsContent = document.querySelectorAll('.tabcontent')
    const tabsParent = document.querySelector('.tabheader__items')

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add('hide')
            item.classList.remove('show')
            item.classList.remove('fade')
        })
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show')
        tabsContent[i].classList.add('fade')
        tabsContent[i].classList.remove('hide')

        tabs[i].classList.add('tabheader__item_active')
    }
   
    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', (event) => {
        if (event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
    //================= Timer


    const deadline = '2021-09-13';

    function getTimeRemaining(endtime) {
        const tim = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((tim / (1000 * 60 * 60 * 24))),
            hours = Math.floor((tim / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((tim / 1000 / 60) % 60),
            seconds = Math.floor((tim / 1000) % 60)
            
        return {
            'total': tim,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(element, endtime) {
        const timer = document.querySelector(element),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        updateClock()
        
        function updateClock() {
            const time = getTimeRemaining(endtime)
    
            days.innerHTML = getZero(time.days)
            hours.innerHTML = getZero(time.hours)
            minutes.innerHTML = getZero(time.minutes)
            seconds.innerHTML = getZero(time.seconds)

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline)



    //================= Modal window

    const modalTrigger = document.querySelectorAll('.btn');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close')

    function showWindow() {
        modal.classList.add('show')
        modal.classList.add('fade')
        modal.classList.remove('hide')

        document.body.style.overflow = 'hidden';

        clearInterval(modalTimerId)
    }

    modalTrigger.forEach((btn) => {
        btn.addEventListener('click', showWindow)
    })

    function hideWindow() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        modal.classList.remove('fade')

        document.body.style.overflow = ''
    }
    modalCloseBtn.addEventListener('click', hideWindow)

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideWindow()
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.classList.contains('show')) {
            hideWindow()
        }
    })

    const modalTimerId = setTimeout(showWindow, 4000)

    function showByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalTimerId

            window.removeEventListener('scroll', showByScroll)
        }
    }
    window.addEventListener('scroll', showByScroll)


    // ===================== Classes

    // class MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.content = content;
    //         this.price = price;
    //         this.parentSelector = document.querySelector(parentSelector)
    //         // this.transfer = 28;
    //         // this.changetoUAH();
    //     }

    //     // changetoUAH() {
    //     //     this.price = this.price * this.transfer;
    //     // }

    //     createCard() {
    //         const div = document.createElement('div')
    //         div.classList.add('menu__item')
    //         div.innerHTML = `<img src=${this.src} alt=${this.alt}>
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">${this.content}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //         </div>`
    //         this.parentSelector.append(div)
    //     }
    // }

    // const card = new MenuCard(
    //     src = "img/tabs/vegy.jpg",
    //     alt = "vegy",
    //     title = 'Меню "Фитнес"',
    //     content = 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     // price = 9,
    //     price = 252,
    //     '.menu .container'
    // )
    // card.createCard()

    // class Card2 extends MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         super(src, alt, title, content, price, parentSelector)
    //     }
    //     createCard2() {
    //         const div2 = document.createElement('div')
    //         div2.classList.add('menu__item')
    //         div2.innerHTML = `<img src=${this.src} alt=${this.alt}>
    //                 <h3 class="menu__item-subtitle">${this.title}</h3>
    //                 <div class="menu__item-descr">${this.content}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //             </div>`
    //         this.parentSelector.appendChild(div2)
    //     }
    // }

    // const card2 = new Card2(
    //     src = "img/tabs/elite.jpg",
    //     alt = "elite",
    //     title = 'Меню “Премиум”',
    //     content = 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     price = 550,
    //     '.menu .container'
    // )
    // card2.createCard2()


    // class Card3 extends MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         super(src, alt, title, content, price, parentSelector)
    //     }
    //     createCard3() {
    //         const div3 = document.createElement('div')
    //         div3.classList.add('menu__item')
    //         div3.innerHTML = `<img src=${this.src} alt=${this.alt}>
    //                 <h3 class="menu__item-subtitle">${this.title}</h3>
    //                 <div class="menu__item-descr">${this.content}</div>
    //                 <div class="menu__item-divider"></div>
    //                 <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //             </div>`
    //         this.parentSelector.appendChild(div3)
    //     }
    // }

    // const card3 = new Card3(
    //     src = "img/tabs/post.jpg",
    //     alt = "post",
    //     title = 'Меню “Постное”',
    //     content = 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     price = 430,
    //     '.menu .container'
    // )
    // card3.createCard3()




    // ======================== Вариант 2



    // class MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.content = content;
    //         this.price = price;
    //         this.parentSelector = document.querySelector(parentSelector)
    //         this.transfer = 28;
    //         this.changetoUAH();
    //     }

    //     changetoUAH() {
    //         this.price = this.price * this.transfer;
    //     }

    //     createCard() {
    //         const div = document.createElement('div')
    //         div.classList.add('menu__item')
    //         div.innerHTML = `<img src=${this.src} alt=${this.alt}>
    //             <h3 class="menu__item-subtitle">${this.title}</h3>
    //             <div class="menu__item-descr">${this.content}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //         </div>`
    //         this.parentSelector.append(div)
    //     }
    // }

    // const card = new MenuCard(
    //     src = "img/tabs/vegy.jpg",
    //     alt = "vegy",
    //     title = 'Меню "Фитнес"',
    //     content = 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     price = 9,
    //     // price = 252,
    //     '.menu .container'
    // )
    // card.createCard()


    // class Card2 extends MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         super(src, alt, title, content, price, parentSelector)
    //     }
    // }
    // const card2 = new Card2(
    //     src = "img/tabs/post.jpg",
    //     alt = "post",
    //     title = 'Меню “Постное”',
    //     content = 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     // price = 430,
    //     price = 15,
    //     '.menu .container'
    // )
    // card2.createCard()


    // class Card3 extends MenuCard {
    //     constructor(src, alt, title, content, price, parentSelector) {
    //         super(src, alt, title, content, price, parentSelector)
    //     }
    // }

    // const card3 = new Card3(
    //     src = "img/tabs/elite.jpg",
    //     alt = "elite",
    //     title = 'Меню “Премиум”',
    //     content = 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     // price = 550,
    //     price = 20,
    //     '.menu .container'
    // )
    // card3.createCard()





    // =================================== Вариант 3 
    

    const menu = document.querySelector('.menu')
    const container = menu.querySelector('.container')


    class MenuCard {
        constructor(src, alt, title, content, price) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.content = content;
            this.price = price;
            this.parentSelector = container
            this.transfer = 28;
            this.changetoUAH();
        }
        
        changetoUAH() {
            this.price = this.price * this.transfer;
        }

        createCard() {
            const div = document.createElement('div')
            div.classList.add('menu__item')
            div.innerHTML = `<img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.content}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>`
            this.parentSelector.append(div)
        }
    }

    const card = new MenuCard(
        src = "img/tabs/vegy.jpg",
        alt = "vegy",
        title = 'Меню "Фитнес"',
        content = 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        price = 9
        // price = 229,
    )
    card.createCard()

    const card2 = new MenuCard(
        src = "img/tabs/elite.jpg",
        alt = "elite",
        title = 'Меню “Премиум”',
        content = 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан! Это абсолютно новый продукт!',
        // price = 550,
        price = 20
        // '.menu .container'
    )
    card2.createCard()

    const card3 = new MenuCard(
        src = "img/tabs/post.jpg",
        alt = "post",
        title = 'Меню “Постное”',
        content = 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        // price = 430,
        price = 15
    )
    card3.createCard()


    
    // =================================== Работа с Post запросом(введенных в формах)

    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //================================== Slider - Урок 61
    
    //     const slides = document.querySelectorAll('.offer__slide');
    //     const prev = document.querySelector('.offer__slider-prev');
    //     const next = document.querySelector('.offer__slider-next');
    //     const total = document.querySelector('#total');
    //     const current = document.querySelector('#current');
        
    //     let sliderIndex = 1

    //     showSlide(sliderIndex)

    //     if (slides.length < 10) {
    //         total.textContent = `0${slides.length}`
    //     }
    //     else {
    //         total.textContent = slides.length
    //     }

    //     function showSlide(n) {
    //         if (n > slides.length) {
    //             sliderIndex = 1
    //         }
    //         if (n < 1) {
    //             sliderIndex = slides.length
    //         }
    //         slides.forEach((item) => {
    //             item.style.display = 'none'
    //         })
    //         slides[sliderIndex - 1].style.display = 'block';

    //         if (slides.length < 10) {
    //             current.textContent = `0${sliderIndex}`
    //         }
    //         else {
    //             current.textContent = sliderIndex
    //         }
    //     }

    //     function plusSlide(n) {
    //         showSlide(sliderIndex += n)
    //     }


    //     function showSL() {
    //         plusSlide(1)
    //     }
    //     setInterval(showSL, 5000)


    //     prev.addEventListener('click', () => {
    //             plusSlide(-1)
    //     })

    //     next.addEventListener('click', () => {
    //         plusSlide(1)
    // })
  




    //================================== Slider-Navigation, Урок 62-63

    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider')
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper');
    const slidesInner = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;


    let sliderIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${sliderIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = sliderIndex
    }

    slider.style.position = 'relative';

    const indicator = document.createElement('ol')
    const dots = [];
    indicator.classList.add('carousel-indicators')
    slider.append(indicator)


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.classList.add('dit')
        dot.style.backgroundColor = 'lightgreen'
        dot.setAttribute('data-slide-to', i + 1)

        if (i == 0) {
            dot.style.opacity = '1'
        }

        indicator.append(dot)
        dots.push(dot)
    }


    
    slidesInner.style.width = 100 * slides.length + '%';
    slidesInner.style.display = 'flex';
    slidesInner.style.transition = '1s all';

    slidesWrapper.style.overflow = 'hidden'


    slides.forEach((slide) => {
        slide.style.width = width;
    })

    function deleteNoDigital(str) {
        return +str.replace(/\D/g, '')
    }

    next.addEventListener('click', () => {

        if (offset == deleteNoDigital(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += deleteNoDigital(width)
        }

        if (sliderIndex == slides.length) {
            sliderIndex = 1
        } else {
            sliderIndex++
        }

        slidesInner.style.transform = `translateX(-${offset}px)`
            
            
        if (slides.length < 10) {
            current.textContent = `0${sliderIndex}`
        } else {
            current.textContent = sliderIndex
        }
 
        dots.forEach((dot) => {
            dot.style.opacity = '0.5'
        })
        dots[sliderIndex - 1].style.opacity = '1'
    })

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNoDigital(width) * (slides.length - 1)
        } else {
            offset -= deleteNoDigital(width)
        }

        if (sliderIndex == 1) {
            sliderIndex = slides.length
        } else {
            sliderIndex--
        }
        
        slidesInner.style.transform = `translateX(-${offset}px)`

        if (slides.length < 10) {
            current.textContent = `0${sliderIndex}`
        } else {
            current.textContent = sliderIndex
        }
        dots.forEach((dot) => {
            dot.style.opacity = '0.5'
        })
        dots[sliderIndex - 1].style.opacity = '1'
    })

    dots.forEach((dot) => {

        dot.addEventListener('click', (event) => {
        
            const slideTo = event.target.getAttribute('data-slide-to')
            
            sliderIndex = slideTo

            offset = deleteNoDigital(width) * (slideTo - 1)

            slidesInner.style.transform = `translateX(-${offset}px)`

            if (slides.length < 10) {
                current.textContent = `0${sliderIndex}`
            } else {
                current.textContent = sliderIndex
            }

            dots.forEach((dot) => {
                dot.style.opacity = '0.5'
            })
            dots[sliderIndex - 1].style.opacity = '1'
            dots[sliderIndex - 1].style.backgroundColor = 'white'
        })
    })
    
    
    
    
    
    //================================== Calc-Calories, Урок 66-67
    
    const result = document.querySelector('.calculating__result span');


    let gender,
        age,
        weight,
        ratio,
        height;

    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender')
    } else {
        gender = 'female'
        localStorage.setItem('gender', 'female')
    }


    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375)
    }



    function initLocalStorage(selector, activeClass) {

        const elements = document.querySelectorAll(selector)

        elements.forEach((element) => {
            element.classList.remove(activeClass)

            if (element.getAttribute('id') === localStorage.getItem('gender')) {
                element.classList.add(activeClass)
            }
            
            if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                element.classList.add(activeClass)
            }
        })
    }

    initLocalStorage('#gender div', 'calculating__choose-item_active')
    initLocalStorage('.calculating__choose_big div', 'calculating__choose-item_active')


    function calcTotal() {
        if (!gender || !age || !weight || !ratio || !height) {
            result.textContent = '____'
            return;
        }

        if (gender === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else if (gender === 'male') {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }
        initLocalStorage()
    }
    calcTotal()

    function getStaticInformation(selector, activeClass ) {
        const elements = document.querySelectorAll(selector)

        elements.forEach((elem) => {
            elem.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    ratio = +event.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', +event.target.getAttribute('data-ratio'));
                } else {
                    gender = event.target.getAttribute('id');
                    localStorage.setItem('gender', event.target.getAttribute('id'))
                }
    
                elements.forEach((elem) => {
                    elem.classList.remove(activeClass);
                })
                event.target.classList.add(activeClass)
    
                calcTotal()
            });
        })
    }
    getStaticInformation('#gender div', 'calculating__choose-item_active')
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active')

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector)

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red'
            } else {
                input.style.border = 'none'
            }

             switch (input.getAttribute('id')) {
                 case 'weight':
                     weight = +input.value
                     break;
                 case 'height':
                     height = +input.value;
                     break;
                 case 'age':
                     age = +input.value 
                     break;
             }
            
             calcTotal()
        })
    }
    getDynamicInformation('#weight')
    getDynamicInformation('#height')
    getDynamicInformation('#age')
})
