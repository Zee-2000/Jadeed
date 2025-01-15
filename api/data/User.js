const bcrypt = require('bcrypt')
const users =
    [
        {
            name: "Zahwa A.El Nasser",
            age: 25,
            email: "zahwaabdelnasser@gmail.com",
            password: bcrypt.hashSync("2269038", 10),
            isAdmin: true
        },
        {
            name: "Jomana Ismail",
            age: 21,
            email: "1232@gmail.com",
            password: bcrypt.hashSync("123456", 10)
        },
        {
            name: "User",
            age: 19,
            email: "admin@gmail.com",
            password: bcrypt.hashSync("000000", 10)
        },
        {
            name: "Reyam",
            age: 13,
            email: "reyam@gmail.com",
            password: bcrypt.hashSync("6528478", 10)
        }
    ]
module.exports = users;