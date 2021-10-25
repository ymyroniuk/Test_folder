const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');


const app = express();
config.express(app);
config.routes(app);

const {PORT, mongoUri} = config.app

async function start() {
    await mongoose.connect(mongoUri, { useNewUrlParser: true })
        .then(() => app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT}`);
        })).catch(err => console.error(`Error connecting to mongo: ${mongoUri}`))
};
start()


//Myronuik1312