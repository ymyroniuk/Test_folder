const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const router = require('./routes/router');

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/', router)

const connection = 'mongodb+srv://Users:<password>@cluster0.knn4g.mongodb.net/Users?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await mongoose.connect(connection, {useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}
start()