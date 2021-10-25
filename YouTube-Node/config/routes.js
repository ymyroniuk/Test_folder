const products = require('../app/controllers/products')
const auth = require('../app/controllers/auth');
const { check } = require('express-validator');
const authMiddleware = require('../app/middleware/authMiddleware')

module.exports = (app) => {
    app.get('/products', authMiddleware,  products.getAll);
    app.post('/products', authMiddleware, products.create);
    app.put('/products/:id', authMiddleware, products.update);
    app.delete('/products/:id', authMiddleware, products.deleting);


    //auth

    app.post('/registration', [
        check('email', 'Email cannot empty').notEmpty(),
        check('password', 'Password must be have more 4 and smaller 10 symbols').isLength({min: 4, max: 10})
    ], auth.registration)

    app.post('/signin', auth.sigIn);
    
    app.post('/refresh-tokens', auth.refreshTokens);
}
