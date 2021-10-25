const { Router } = require('express');
const PostController = require('../controllers/postController')

const router = new Router();

router.get('/posts', PostController.getAll)
router.post('/posts', PostController.create )
router.get('/posts/:id', PostController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

module.exports = router