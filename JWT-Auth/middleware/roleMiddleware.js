const jwt = require('jsonwebtoken');
const {secret} = require('../config')

module.exports = (roles) => {
    return function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
               return res.status(403).json({message: 'The user is not registered'})
            }
            const { roles: userRoles } = jwt.verify(token, secret)
            let hasRole = false
            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true
                }
            })
            if (!hasRole) {
               return res.status(403).json({message: 'The user has no such rights'})
            }
            next()
        } catch (err) {
            console.log(err);
            res.status(403).json({message: 'The user is not registered'})
        }
    }
}