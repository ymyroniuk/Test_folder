const express = require('express');

const app = express();

app.use(express.json())

app.use('/api', require('./routes/user.routes'));
app.use('/api', require('./routes/post.routes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})