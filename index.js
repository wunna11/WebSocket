let express = require('express');
let socket = require('socket.io');

// App setup
let app = express();

// Server Setup
let server = app.listen(5000, () => {
    console.log("Project is running at 5000 port");
});

// Route setup
app.get('/', (res, req) => {
    req.sendFile(__dirname+'/public/index.html');
});

// Socket setup
let io = socket(server);
io.on('connection', (socket) => {
    console.log('a user is connectd' + socket.id);
});