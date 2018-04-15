const {ObjectID}=require('mongodb');

const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../server/models/todo');
const {User}=require('../server/models/user');

// Todo.remove({}).then((result)=>{
//    console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ad2e92d2c7a4fe838a976c4').then((todo)=>{
   console.log(todo);
});
