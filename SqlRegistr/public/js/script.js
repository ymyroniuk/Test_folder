function showPassword() {
    const btn = document.querySelector('.password_btn')
    const input = document.querySelector('.input-eye')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')

        if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    })
}
showPassword()