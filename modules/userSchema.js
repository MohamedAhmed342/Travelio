const mongoose = require("mongoose");
const { any } = require("webidl-conversions");
const Schema = mongoose.Schema;




// define the Schema (the structure of the article)
const userSchema = new Schema(  {

 
   name :{type : String,required:true} ,
   email :{type : String,required:true , uniqe:true} ,
   password : { type:String , required:true , uniqe:true},
   national_id : Number,


  });


  // Create a model based on that schema
const userApi = mongoose.model("userApi", userSchema);
  


// export the model
module.exports = userApi ;