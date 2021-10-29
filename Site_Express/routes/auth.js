const { Router } = require('express')
const router = Router();
const crypto = require('crypto')
const {validationResult} = require('express-validator/check')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
const keys = require('../keys')
const regEmail = require('../emails/registation')
const resetEmail = require('../emails/reset')
const { registerValidators } = require('../utils/validators')
const {loginValidators} = require('../utils/validators')

const transport = nodemailer.createTransport(sendgrid({
    auth: {api_key: keys.SENDGRID_API_KEY}
}))


router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'Authorization',
        isLogin: true,
        loginError: req.flash('loginError'),
        registerError: req.flash('registerError')
    })
})

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
    res.redirect('/auth/login#login')
    })
})

router.post('/login', loginValidators, async (req, res) => {
    try {
        const { email, password } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            req.flash('loginError', errors.array()[0].msg)
            return res.status(422).redirect('/auth/login#login')
        }
        const candidate = await User.findOne({ email })
        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate.password)
            if (areSame) {
                req.session.user = candidate
                req.session.isAuthenticated = true
                req.session.save((err) => {
            if (err) {
                throw err;
            } 
            res.redirect('/')
        })
            } else {
                req.flash('loginError', 'Wrong password')
                res.redirect('/auth/login#login')
            }
        } else {
            res.redirect('/auth/login#login')
        }
    } catch (err) {
        console.log(err);
    }
})

router.post('/register', registerValidators, async (req, res) => {
    try {
        const { email, password, name } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            req.flash('registerError', errors.array()[0].msg)
            return res.status(422).redirect('/auth/login#register')
        }
            const hashPassword = await bcrypt.hash(password, 10)
            const user =  new User({
                email, name, password: hashPassword, cart: {items: []}
            })
            await user.save()
            await transport.sendMail(regEmail(email))
            res.redirect('/auth/login#login')
    } catch (error) {
        console.log(error);
    }
})

router.get('/reset', (req, res) => {
    res.render('auth/reset', {
        title: 'Forgot password?',
        error: req.flash('error')
    })
})

router.post('/reset', (req, res) => {
    try {
        crypto.randomBytes(32, async (err, buffer) => {
            if (err) {
            req.flash('err', 'Something went wrong, try again later')
            return res.redirect('/auth/reset')
            }
            const token = buffer.toString('hex')
            const candidate = await User.findOne({ email: req.body.email })
            
            if (candidate) {
                candidate.resetToken = token;
                candidate.resetTokenExp = Date.now() + 60 * 60 * 1000
                await candidate.save()
                await transport.sendMail(resetEmail(candidate.email, token))
                res.redirect('/auth/login')
            } else {
                req.flash('error', 'There is no email')
                res.redirect('/auth/reset')
            }
        })
    } catch (err) {
        console.log(err);
    }
})

router.get('/password/:token', async (req, res) => {
    if (!req.params.token) {
        return res.redirect('/auth/login')
    }
    try {
        const user = await User.findOne({
            resetToken: req.params.token,
            resetTokenExp: {$gt: Date.now()}
        })
        if (!user) {
            return res.redirect('/auth/login')
        } else {
            res.render('auth/password', {
                title: 'Restore access',
                error: req.flash('error'),
                userId: user._id.toString(),
                token: req.params.token
            })
        } 
    } catch (err) {
        console.log(err);
    }
})

router.post('/password', async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.body.userId,
            resetToken: req.body.token,
            resetTokenExp: {$gt: Date.now()}    // $gt - делает проверку чтобы resetTokenExp было больше чем Date.now() а иначе он потерял время жизни
        })
        if (user) {
            user.password = await bcrypt.hash(req.body.password, 10)
            user.resetToken = undefined;
            user.resetTokenExp = undefined;
            await user.save()
            res.redirect('/auth/login')
        } else {
            req.flash('loginError', 'Tocken life has expired')
            res.redirect('/auth/login')
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router



// req.params - содержит параметры маршрута