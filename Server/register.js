let accountStorage = [];
let userStorage = [];

registerAccount = (socket, request) => {
    console.log(request);

    let account = request.split("/", 3);
    let user = account[0];
    let pass = account[1];
    let nonce = account[2];

    let isUserUnique = saveUniqueUsers(user);
    console.log(isUserUnique);
    if (isUserUnique == true) {
        accountStorage.push(account);
        console.log(accountStorage);
        console.log(`1/${nonce}/1`);
        socket.write(`1/${nonce}/1`);
    } else {
        console.log(`1/${nonce}/2`);
        socket.write(`1/${nonce}/2`);
    }
};

saveUniqueUsers = (user) => {
    for (let i = 0; i <= userStorage.length; i++) {
        if (userStorage[i] == user) {
            return false;
        }
    }
    userStorage.push(user);
    return true;
};

module.exports = { registerAccount, accountStorage };