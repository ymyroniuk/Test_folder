const tokenService = require('../service/token-service')
const { getRes } = require('../service/getResponse');

module.exports = function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return res.status(403).json(getRes({message: 'Error authorization'}))
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken) {
            return res.status(403).json(getRes({message: 'Error authorization'}))
        }
        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData) {
            return res.status(403).json(getRes({message: 'Error validation'}))
        }
        req.user = userData
        next()
    } catch (err) {
        return res.status(403).json(getRes({error: err.message}))
    }
}