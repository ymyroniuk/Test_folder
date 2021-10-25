const rub = document.querySelector('#rub')
const usd = document.querySelector('#usd')

// свойства запроса
// status
// response
// readyState,
// statusText

rub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', 'js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response)
            usd.value = (+rub.value / data.current.usd).toFixed(2)
        } else {
            usd.value = 'Error'
        }
    })
})