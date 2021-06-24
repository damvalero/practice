const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'email@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Manuel Care',
        email: 'manuel@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane User',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    }
]

module.exports = users;