const path = require('path');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const validate = require('./middlleware/validate');
const mailer = require('./nodemailer/mailer');


let getUser;

class Controller {
    async registrationGET(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'register.html'))
    }
    async registrationPOST(req, res) {
        try {
            let validation = await validate(req.body)
            console.log(validation);
            if (validation.status) {
                let user = new User();
                console.log(req.body);
                let hashedPassword = await bcrypt.hash(req.body.password, 10)
                if (req.body.password === req.body.confirm) {
                    user.save({
                        email: req.body.email,
                        password: hashedPassword,
                        name: req.body.name,
                    });
                    return res.redirect('/login')
                } else {
                    res.json({message: 'Password does not coincide with confirm password'})
                }
            } else {
                res.redirect('/')
            }
        } catch (err) {
            console.log(err);
        }
    }
    async loginGET(req, res) {
        try {
            res.sendFile(path.join(__dirname, 'public', 'login.html'))
        } catch (err) {
            console.log(err);
        }
    }
    async loginPOST(req, res) {
        try {
            let sess = req.session
            if (sess.user) {
                res.redirect('/home')
            } else {
                const user = new User()
                let result = await user.getAll({email: req.body.email});
                if (result.length > 0 && await bcrypt.compare(req.body.password, result[0].password)) {
                    sess.user = result[0];
                    return res.redirect('/home')
                } else {
                    res.send('Password and login not valid, please change it!')
                }
            }
        } catch (err) {
            console.log(err);
        }      
    }
    async logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                return console.log(err);
            } else {
                res.redirect('/');
            }
        })
    }
    async resetGET(req, res) {
        res.sendFile(path.join(__dirname, 'public', 'reset.html'))
    }
    async resetPOST(req, res) {
        try {
            const userEmail = req.body
            const user = new User()
            getUser = await user.getAll({ email: req.body.email })
            console.log(getUser);
            const candidate = await user.findUserEmail(userEmail)
                    if (candidate) {
                      res.redirect('/')
                      return mailer(candidate)
                } else {
                    res.redirect('/reset')
                }
        } catch (err) {
            console.log(err);
        }
    }
    async changePasswordGET(req, res) {
        try {
            res.sendFile(path.join(__dirname, 'public', 'change.html'))
        } catch (err) {
            console.log(err);
        }
    }
    async changePasswordPOST(req, res) {
        try {
            // const password = req.body
            // console.log(password);
            let newPassword = await bcrypt.hash(req.body.password, 10)
            const user = new User()
            if (getUser.length === 0 && await bcrypt.compare(req.body.password, getUser[0].password)) { 
                return res.redirect('/')
            } else {
                await user.changePassword(getUser[0].email, newPassword)
                return res.redirect('/login')
            }
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new Controller()