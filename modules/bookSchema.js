const mongoose = require("mongoose");
const { any } = require("webidl-conversions");
const Schema2 = mongoose.Schema;




// define the Schema (the structure of the article)
const BookSchema = new Schema2(  {

 
  frist_name :{type : String,required:true} ,
  last_name :{type : String,required:true} ,
  Mobile_number: {type : Number ,required:true } ,
  Leaving_from : { type:String , required:true },
  Type_of_Tickets: {type:String , required:true},
  passport :{type:String , required:true}

   

  });


  // Create a model based on that schema
  
const bookSchema = mongoose.model("userApi",BookSchema);
  


// export the model
module.exports = bookSchema ;