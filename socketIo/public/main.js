const socket = io()

const messages = document.querySelector('.messages');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');
const input = document.querySelector('#input')
const nameBlock = document.querySelector('.name')


const userName = prompt('Your name:')
nameBlock.innerHTML = `${userName}`

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (input.value) {
        socket.emit('chat message', {
            message: input.value,
            name: userName
        })
    }
    input.value = '';
})

socket.on('chat message', (data) => {
    const li = document.createElement('li')
    li.innerHTML = `<span>${data.name}</span>: ${data.message}`
    messages.appendChild(li)
    window.scrollTo(0, document.body.scrollHeight)
})