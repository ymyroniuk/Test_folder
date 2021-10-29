const { body } = require('express-validator/check')
const User = require('../models/user')

exports.registerValidators = [
    body('email').isEmail().withMessage('Enter correct email').custom( async (value, { req }) => {
        try {
            const user = await User.findOne({ email: value })
            if (user) {
                return Promise.reject('This email is already taken')
            }
        } catch (err) {
            console.log(err);
        }
    }).normalizeEmail(),
    body('password', 'Password must be have min 4 symbols').isLength({ min: 4, max: 56 }).isAlphanumeric().trim(),
    body('confirm').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Passwords must coincide')
        } return true
    }).trim(),
    body('name').isLength({ min: 3 }).withMessage('Name must be have min 3 symbols').trim()
]
exports.loginValidators = [
    body('email').isEmail().withMessage('Enter correct email').custom( async (value, { req }) => {
        try {
            const user = await User.findOne({ email: value })
            if (!user) {
                return Promise.reject("This email is hasn't been registered yet.")
            } return true
        } catch (err) {
            console.log(err);
        }
    }).normalizeEmail(),
    body('password', 'Password must be have min 6 symbols').isLength({ min: 4, max: 56 }).isAlphanumeric()
        .custom((value, { req }) => {
            if (value !== req.body.password ) {
                throw new Error('Wrong password')
            } return true
        }).trim()
]
exports.courseValidators = [
    body('title').isLength({ min: 3 }).withMessage('Min name length 3 symbols').trim(),
    body('price').isNumeric().withMessage('Enter correct price'),
    body('img', 'Enter correct URL image').isURL()
]