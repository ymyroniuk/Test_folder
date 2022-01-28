const db = require('../db');
class PostController {
    async createPost(req, res) {
        const { title, content,  user_id } = req.body;
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *`,
            [title, content,  user_id]);
        return res.status(201).json(newPost.rows[0])
    }
    async getPostsByUser(req, res) {
        const id = req.query.id
        const posts = await db.query(`SELECT * FROM post WHERE userId = $1`, [id])
        return res.status(201).json(posts.rows)
    }
    async updatePost(req, res) {
        const id = req.params.id
        const {title, content} = req.body
        const post = await db.query(`UPDATE post SET title = $1, content = $2 WHERE id = ${id} RETURNING *`, [title, content])
        return res.status(201).json(post.rows[0])
    }
    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query(`DELETE FROM post WHERE id = ${id}`)
        return res.status(201).json(post.rows[0])
    }
}

module.exports = new PostController();