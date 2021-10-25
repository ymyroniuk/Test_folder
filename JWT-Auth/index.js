const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const url = 'mongodb+srv://YarikBochok:Myronuik1312@cluster0.r8ngr.mongodb.net/auth_roles?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000

async function start() {
    try {
        await mongoose.connect(url)
        app.listen(PORT, () => {
        console.log(`Server has been started on PORT: ${PORT}`);
    })
    } catch (err) {
        console.error(`Error connecting to mongo: ${url}`);
    }
}
start()