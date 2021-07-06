let slides = document.querySelectorAll('.slide')

    //Первый метод 

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
            slide.classList.add('active')
        })
}
    
function clearActiveClasses() {
    slides.forEach((slide) => {
         slide.classList.remove('active')
     })
}