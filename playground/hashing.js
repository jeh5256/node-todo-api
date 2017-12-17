const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 4
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);


// var message = 'I am a message';
// var hashedMessage = SHA256(message);

// console.log(`Message: ${message}`);
// console.log(`Hashed Message: ${hashedMessage}`);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()  
// };

// //Change token data 
// token.id = 5
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// //Verify token hash
// if (resultHash == token.hash) {
//     console.log('Data wasn\'t changed');
// } else {
//     console.log('Data was changed');
// }
