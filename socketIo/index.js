const express = require('express')
const path = require('path')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

// io.on('connection', (socket) => {
//     socket.on('chat message', (data) => {
//         io.emit('chat message', {
//             message: data.message,
//             name: data.name
//         })
//     })
// })

io.on('connection', (socket) => {
    socket.on('chat message', (data) => {
        io.emit('chat message', {
            message: data.message,
            name: data.name
        })
    })
})

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Server has been started on PORT ${PORT}`);
})
