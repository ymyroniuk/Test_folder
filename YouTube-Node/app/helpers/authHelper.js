const jwt = require('jsonwebtoken')
// const { v4: uuidv4 } = require('uuid');
const { secret, tokens } = require('../../config/app').jwt
const Token = require('../models/token')

const createdAccessToken = (userId) => {
    const payload = {
        userId,
        type: tokens.access.type
    }
    return  jwt.sign(payload, secret, { expiresIn: tokens.access.expiresIn })
}

const createdRefreshToken = (userId) => {
    const payload = {
        // id: uuidv4(),
        userId,
        type: tokens.refresh.type
    }
    return {
        id: payload.id,
        token: jwt.sign(payload, secret, { expiresIn: tokens.refresh.expiresIn }),
    };
};

async function replaceDbRefreshToken (tokenId, userId) {
   await Token.findOneAndRemove({ userId })
//    .then(() => Token.create({tokenId, userId}))
   await Token.create({tokenId, userId})
}

module.exports = {
    createdAccessToken, createdRefreshToken, replaceDbRefreshToken
}