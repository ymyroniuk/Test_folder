module.exports = {
    PORT: process.env.PORT || 3000,
    mongoUri: 'mongodb+srv://Yarikson:<password>@cluster0.r9etk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    jwt: {
        secret: 'Ne vse mogut v IT',
        tokens: {
            access: {
                type: 'access',
                expiresIn: '1m',
            },
            refresh: {
                type: 'refresh',
                expiresIn: '6m',
            },
        },
    },
};

// 1927