const express = require('express')
const app = express()

app.get('/trang-chu2', function (req, res) {
    var a = 1;
    var a = a + 1;
    var b = 10;
    var c = a + b;
    res.send('Hello World')
})

app.listen(3000)