const db = require('../db');
class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING * `, [name, surname])
        return res.status(201).json(newPerson.rows[0])
    }
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        return res.status(200).json(users.rows)
    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person WHERE id = $1`, [id])
        return res.status(200).json(user.rows[0])
    }
    async updateUser(req, res) {
        const id = req.params.id
        const { name, surname } = req.body
        const updateUser = await db.query(`UPDATE person set name = $1, surname = $2 WHERE id = ${id} RETURNING *`,
            [name, surname])
        return res.status(200).json(updateUser.rows[0])
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM person WHERE id = ${id}`)
        return res.status(200).json(user.rows[0])
    }
}
module.exports = new UserController();