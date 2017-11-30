const {ObjectID} =  require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a1b8337709cbc09a40b13a711';

if (ObjectID.isValid(id)) {
    console.log('ID is not valid');
}

Todo.find({
    _id:id
}).then((todos) => {
    console.log(todos);
});

Todo.findOne({
    _id:id
}).then((todos) => {
    console.log(todos);
});

Todo.findById(id).then((todos) => {
    console.log(todos);
}).catch((e) => {
    console.log(e);
});

var id = '6a1f84f945a5f4e057ac8aef';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    } else {
        console.log(user);
    }
}).catch((e) => {
    console.log(e);
});