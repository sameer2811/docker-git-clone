const express = require('express');
const server = express();

server.get('/home', function (req, res) {
    return res.json({
        "msg": "everything alright"
    });
})

server.listen(6000, function (req, res) {
    console.log("Server is up and runnig at 6000");
});