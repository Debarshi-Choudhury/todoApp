const {ObjectID}=require('mongodb');

const {mongoose}=require('../server/db/mongoose');
const {Todo}=require('../server/models/todo');
const {User}=require('../server/models/user');

// var id="5ad2a9c62157f54517eea249";
//
// if(!ObjectID.isValid(id)){
//    console.log("ID is not valid");
// }
//
// Todo.find({
//    _id:id
// }).then((todos)=>{
//    console.log('Todos',todos);
// });
//
// Todo.findOne({
//    _id:id
// }).then((todo)=>{
//    console.log('Todo',todo);
// });
//
// Todo.findById(id).then((todo)=>{
//    if(todo==null){
//       return console.log("id not found");
//    }
//    console.log('Todo by id',todo);
// }).catch((e)=>console.log(e));

var id='5aaf118cb62bab003484bae1';
User.findById(id).then((user)=>{
   if(user==null){
      return console.log("No User found");
   }
   console.log("User by id",user);
}).catch((e)=>{
   console.log("The id is not valid");
});
