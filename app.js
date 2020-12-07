const express = require("express");
// express server
const app = express();
//  nodejs
const server = require("http").Server(app);
// nodejs => socket enabled
const path = require("path");
const io = require("socket.io")(server);
// serve static assets to client
app.use(express.static("public"));

io.on("connection", function (socket) {
    console.log(`${socket.id} connected`);

    // socket.on("imagecome", function (data) {
    //     socket.broadcast.emit("imgcome", data);
    // })
    socket.on("modechange", function (data) {
        socket.broadcast.emit("mc", data);
    })
    socket.on("mousedown", function (data) {
        socket.broadcast.emit("md", data);
    });


    socket.on("mousemove", function (data) {
        socket.broadcast.emit("mm", data);
    })

    socket.on("stickyaagya", function (data) {
        socket.broadcast.emit("staagya", data);
    })


    socket.on("clearall", function (data) {
        socket.broadcast.emit("clrall", data);
    })
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("listening on *:3000");
});