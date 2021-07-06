let upBtn = document.querySelector('.up-button');
let downBtn = document.querySelector('.down-button');
let mainSlide = document.querySelector('.main-slide');
let sidebar = document.querySelector('.sidebar')
let slidesCount = mainSlide.querySelectorAll('div').length
    sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
   let container = document.querySelector('.container')
    
let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    let height = container.clientHeight
        
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}