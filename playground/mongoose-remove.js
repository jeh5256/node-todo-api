const {ObjectID} =  require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove('5a24c7ebe4ef8f2b55e0e524').then((todo) => {
    console.log(todo);
});

Todo.findOneAndRemove({'5a24c7ebe4ef8f2b55e0e524'}).then((todo) => {
    console.log(todo);
});