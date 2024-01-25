const express = require("express");
const app = express();
const path = require("path");
const port = 2020;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))






app.get('/', (req, res) => {

    res.sendFile(__dirname + "/public/home.html");

})
app.get('/view', (req, res) => {
    res.sendFile(__dirname + "/public/view.html");
})




app.get('/control', (req, res) => {
    res.sendFile(__dirname + "/public/control.html");
})


app.get('/qr', (req, res) => {
    res.send("تم قراءة الباركود بالفعل")

})


io.on('connection', (socket) => {
    // socket.emit("a")
    // io.emit("b")
    // socket.broadcast.emit("c")

    socket.on('clickButton', (data) => {
        socket.to("view").emit("clickButton", data);
    })
    socket.on('jo', (id, cl) => {
        socket.join(id);
        socket.join(cl);
    })

    socket.on('go', () => {
        socket.to("player").emit("go");
    })
    socket.on('show', (data) => {
        socket.to("player").emit("show", data);
    })

    socket.on('insert', (data) => {
        socket.to("me").emit("insert", data);
    })
    socket.on('insert2', (data) => {
        socket.to("me").emit("insert2", data);
    })

    socket.on('showMe', (a,b) => {
        socket.to("me").emit("showMe", a,b);
    })


})



server.listen(process.env.PORT || port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




// socket.emit("a")  لي فقط
// io.emit("b") للجميع
// socket.broadcast.emit("c") للجميع الا انا