function darkMode() {
    const body = document.body
    const btn = document.querySelector('.btn')
    const wasDarkMode = localStorage.getItem('darkMode') === 'true'

    btn.classList.toggle('active')
    if (btn.textContent === 'Dark mode') {
        btn.textContent = `White mode`
    } else {
       btn.textContent = `Dark mode`
    }
    localStorage.setItem('darkMode', !wasDarkMode)
    body.classList.toggle('dark_mode')
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', darkMode)

function onload() {
    const body = document.body
    const wasDarkMode = localStorage.getItem('darkMode') === 'true'
    body.classList.toggle('dark_mode', wasDarkMode)
    btn.classList.toggle('active', wasDarkMode)
}
document.addEventListener('DOMContentLoaded', onload)