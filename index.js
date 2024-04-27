const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const server = express();

server.get('/home', function (req, res) {
    return res.json({
        "msg": "everything alright"
    });
})

server.listen(process.env.PORT, function (req, res) {
    console.log("Server is up and runnig at ", process.env.PORT);
});