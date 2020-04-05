let register = require('./register');
let accounts = register.accountStorage;


loginAccount = (socket, request) => {
    let account = request.split("/", 3);
    let user = account[0];
    let pass = account[1];
    let nonce = account[2];

    console.log(accounts);
    console.log(request);

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i][0] == user && accounts[i][1] == pass) {
            console.log(`Congratulations! You are now logged in. user: ${user} pass: ${pass}`);
            socket.write(`2/${nonce}/1`);
            return true;
        }
    }
    console.log("Invalid Credentials.")
    socket.write(`2/${nonce}/2`);
    return false;
}

module.exports = { loginAccount };