const Post = require('../models/Post')
const FileControllers = require('../controllers/fileController')

class PostController {
    async create(req, res) {
        try {
            const { author, title, content} = req.body
            let { image } = req.files
            const fileName = FileControllers.saveFile(image)
            const post = await Post.create({author, title, content, image: fileName})
            res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({message: "Didn't was found by id!"})
            }
            const post = await Post.findById(id)
            return res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({message: 'Id was not specified'})
            }
            const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
            return res.json(updatePost)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).res.json({message: "Didn't was found by id!"})
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json(post)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new PostController()