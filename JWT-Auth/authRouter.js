const {Router} = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const roleMiddleware = require('./middleware/roleMiddleware')

router.post('/registration', [
    check('username', 'User name cannot empty').notEmpty(),
    check('password', 'Password must be have more 4 and smaller 10 symbols').isLength({min: 4, max: 10})
], controller.registration)

router.post('/login', controller.login)

router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

module.exports = router