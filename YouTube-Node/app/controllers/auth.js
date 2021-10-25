const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/app').jwt;
const User = require('../models/user')
const Token = require('../models/token')
const { validationResult } = require('express-validator');
const authHelper = require('../helpers/authHelper');

async function registration(req, res) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.status(400).json({message: 'Registration error', errors})
        }
        const {email, password} = req.body
        const candidate = await User.findOne({ email })
        if (candidate) {
            res.status(400).json({message: 'User with this name already has'})
        }
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = new User({ email, password: hashPassword })
        await user.save()
        return res.json('User successful registration')
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Registration Error'})
    }
}


async function sigIn (req, res) {
    const { email, password } = req.body
    await User.findOne({ email })
        .then((user) => {
            if (!user) {
                res.status(401).json({ message: "User doesn't exist!" });
            }
            const isValid = bcrypt.compareSync(password, user.password);
            if (isValid) {
                 updateTokens(user._id)
                .then((tokens) => res.json(tokens))
            } else {
                res.status(401).json({ message: 'Invalid password' })
            }
        }).catch(err => res.status(500).json({ message: err.message }))
};


async function updateTokens(userId) {
    const accessToken = authHelper.createdAccessToken(userId)
    const refreshToken = authHelper.createdRefreshToken(userId)

    return authHelper.replaceDbRefreshToken(refreshToken.id, userId)
        .then(() => ({
            accessToken,
            refreshToken: refreshToken.token
    }))
}


async function refreshTokens(req, res) {
    let { refreshToken } = req.body;
    try {
        payload = jwt.verify(refreshToken, secret)
        if (payl.type !== 'refresh') {
            res.status(401).json({message: 'Invalid token!'})
        }
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            res.status(401).json({message: 'Token expired'})
        } else if (err instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Invalid token!' })
            return
        }
    }
    await Token.findOne({ tokenId: payload.id })
        .then((token) => {
            if (token === null) {
                throw new Error('Invalid token')
            }
            return updateTokens(token.userId)
        }).then((tokens) => res.json(tokens))
          .catch(err => res.status(400).json({message: err.message}))
}



module.exports = { sigIn, registration, refreshTokens };