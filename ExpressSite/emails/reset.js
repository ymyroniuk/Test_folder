const keys = require('../keys')

module.exports = function (email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Recovery password',
        html:`
            <h1>Did you forgot the password?</h1>
            <p>If not, then ignore this letter</p>
            <p>Otherwise, click on the link below:</p>
            <p><a href="${keys.BASE_URL}/auth/password/${token}">Recovery access</a></p>
            <hr />
            <a href="${keys.BASE_URL}">Courses Shop</a>`
    }
}