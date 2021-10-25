const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const accessToken = require('./tokens/accessToken')



class authController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).json({message: 'Registration error', errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({ username })
            if (candidate) {
                res.status(400).json({message: 'User with this name already has'})
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            const userRole = await Role.findOne({value: 'USER'})
            const user = new User({ username, password: hashPassword, roles: [userRole.value] })
            await user.save()
            return res.json('User successful registration')
        } catch (err) {
            console.log(err);
            res.status(400).json({message: 'Registration Error'})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({ username })
            if (!user) {
               return res.status(400).json({message: 'User not found'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
              return res.status(400).json({message: 'Wrong password'})
            }
            const jwtToken = accessToken(user._id, user.roles)
            return res.json(jwtToken)
        } catch (err) {
            console.log(err);
            res.status(400).json({message: 'Login Error'})
        }
    }

    async getUsers(req, res) {
        try {
           const users = await User.find()
           res.json(users)
       } catch (err) {
           console.log(err);
       }
    }
}

module.exports = new authController() 