// =========================  Вариант 1

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET') {
//         res.writeHead(200, {
//             'Content-Type' : 'text/html'
//         })
//         res.end(`
//             <h1>Form</h1>
//             <form method="post" action="/">
//             <input name="title" type="text" />
//             <button type="submit">Send</button>
//             </form>
//         `)
//     } else if (req.method === 'POST') {
//         const body = [];

//         res.writeHead(200, {
//             'Content-Type' : 'text/html; charset=utf-8'
//         })

//         req.on('data', data => {
//             body.push(Buffer.from(data))
//         })

//         req.on('end', () => {
//             const message = body.toString().split('=')[1]

//             res.end(`<h1>Your message: ${message}</h1>`)
//         })
//     }
// })

// server.listen(3000, () => {
//     console.log('Server has been started...');
// })








// =========================  Вариант 2



const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

            if (req.url === '/') {
                fs.readFile(path.join(__dirname, 'workFiles', 'index.html'),
                    'utf-8', (err, content) => {
                        if (err) {
                        throw err
                        }
                        res.end(content)
            })
         }  else if (req.url === '/about') {
                fs.readFile(path.join(__dirname, 'workFiles', 'about.html'),
                    'utf-8', (err, content) => {
                        if (err) {
                        throw err
                        }
                        res.end(content)
            })
            } else if (req.url === '/api/users') {
                res.writeHead(200, {
                   'Content-Type': 'text/json' 
                })
                const users = [
                    { name: 'John', age: 32 },
                    { name: 'Alex', age: 40}
                ]

                res.end(JSON.stringify(users))
            }

    } else if (req.method === 'POST') {
        const body = [];

        res.writeHead(200, {
            'Content-Type' : 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            const message = body.toString().split('=')[1]

            res.end(`<h1>Your message: ${message}</h1>`)
        })
    }
})

server.listen(3000, () => {
    console.log('Server has been started...');
})






// Метод	Описание
// res.download()	Приглашение загрузки файла.
// res.end()	Завершение процесса ответа.
// res.json()	Отправка ответа JSON.
// res.jsonp()	Отправка ответа JSON с поддержкой JSONP.
// res.redirect()	Перенаправление ответа.
// res.render()	Вывод шаблона представления.
// res.send()	Отправка ответа различных типов.
// res.sendFile	Отправка файла в виде потока октетов.
// res.sendStatus()	Установка кода состояния ответа и отправка представления в виде строки в качестве тела ответа.