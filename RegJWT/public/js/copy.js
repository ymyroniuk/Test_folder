function activatorBackground() {
    const btn2 = document.querySelector('.password_btn_2')
    const input2 = document.querySelector('.input-eye_2')

    btn2.addEventListener('click', () => {
        btn2.classList.toggle('active')

        if (input2.getAttribute('type') === 'password') {
            input2.setAttribute('type', 'text')
        } else {
            input2.setAttribute('type', 'password')
        }
    })
}

activatorBackground()