require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

function mail(email) {
    const PORT = 'http://localhost:3000'
    const mailOptions = {
    from: 'yarikrst@gmail.com',
    to: email,
    subject: 'Message was sent across node.js',
    html: `
    <h1>Did you forgot the password?</h1>
    <p>If not, then ignore this list</p>
    <p>Otherwise, click on the link below:</p>
    <p><a href="${PORT}/change">Recovery access</a></p>
    <hr />
    <a href="${PORT}/">Main Page</a>`
    }
    return mailOptions
}
module.exports = (email) => {
    transporter.sendMail(mail(email), (err) => {
        if (err) {
            console.log('Error with nodemailer')
        }
    })
}