let net = require('net');
let register = require('./register');
let login = require('./login');


let server = net.createServer((socket) => {
    console.log(`Client ${socket.remoteAddress} ${socket.remotePort} is connected.`);

    socket.on('data', (data) => {
        let request = data.toString();
        console.log(request);
        if (request.substring(0, 1) == "1" && request.substring(1, 2) == "/") {
            request = request.substring(2);
            register.registerAccount(socket, request);
        } else if (request.substring(0, 1) == "2" && request.substring(1, 2) == "/") {
            request = request.substring(2);
            login.loginAccount(socket, request);
        } else {
            socket.write("ERROR: Invalid Request");
        }
    });
    socket.write(`Client ${socket.remoteAddress}:${socket.remotePort}, you are connected to 10.244.158.32:1337\r\n`);
});

server.listen(1337, "10.244.158.32");

console.log("Server is running at 10.244.158.32:1337");




































// let server = net.createServer(function (socket) {
//     console.log(`Client ${socket.remoteAddress} ${socket.remotePort} is connected.`);

//     socket.on('data', function (data) {
//         let request = data.toString();
//         console.log(request);
//         if (request.substring(0, 1) == "1" && request.substring(1, 2) == "/") {
//             request = request.substring(2);
//             register.registerAccount(socket, request);
//         } else if (request.substring(0, 1) == "2" && request.substring(1, 2) == "/") {
//             request = request.substring(2);
//             login.loginAccount(socket, request);
//         } else {
//             socket.write("ERROR: Invalid Request");
//         }
//     });
//     socket.write(`Client ${socket.remoteAddress}:${socket.remotePort}, you are connected to 10.244.158.32:1337\r\n`);
// });

// server.listen(1337, "10.244.158.32");

// console.log("Server is running at 10.244.158.32:1337");