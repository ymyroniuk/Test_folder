const {Router} = require('express');
const authMiddleware = require('../middlewares/auth-middleware');

const router = Router();

router.use('/auth', require('./api/auth.routes'));
router.use('/user', require('./api/user.routes'));
router.use('/event', authMiddleware, require('./api/event.routes'));
router.use('/organize', authMiddleware, require('./api/organize.routes'));

module.exports = router;