var mongoose=require('mongoose');
var keys=require('../../config/keys');

mongoose.Promise=global.Promise;
mongoose.connect('keys.mongodburi').then(()=>{
   console.log("connected to mongodb");
}).catch((e)=>{
   console.log('could not connect to mongodb');
});

module.exports={mongoose};

//mongodb://localhost:27017/TodoApp
//
