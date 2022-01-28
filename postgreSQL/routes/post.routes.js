const { Router } = require('express');
const postController = require('../controllers/post.controller');

const router = new Router();

router.post('/', postController.createPost);
router.get('/', postController.getPostsByUser);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router