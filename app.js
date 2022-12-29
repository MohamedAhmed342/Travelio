const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
const userApi = require("./modules/userSchema");
const bookSchema = require("./modules/bookSchema");
const bodyParser = require("body-parser");

app.use(bodyParser.json())
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://abdelrahmanezzateid:abdo2027111@cluster0.uayasb0.mongodb.net/user_data?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })

  .catch((err) => {
    console.log(err);
  });



app.get("/register",(req,res) => {
 // res.render("/test.ejs");

 res.send({message: "User already registerd"})
}) ;

app.post("/register", (req, res)=> {
  const email = req.body.email
  const useA = new userApi({
    name:req.body.name,
    email : req.body.email,
    password : req.body.password,
    national_id:req.body.national_id
  });
  userApi.findOne({email: email}, (err, user) => {
    if(err) res.send({message: "Something Went Wrong ..."})
       if(user){
          res.send({message: "User already registerd"})
      } 
         else {
          useA.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          }) }
      })
  
});


//book

app.get("/login",(req,res) => {
  res.send( { message: "Successfully login" })
  //res.render();
  
})



  app.post("/login", (req, res)=> {
    const email = req.body.email
    const password= req.body.password
    const useA = new userApi({
      email: req.body.email,  
      password : req.body.password
     });
   
    userApi.findOne({ email: email}, (err, user) => {
                if(user){
            if(password === useA.password ) {
                res.send({message: "Login Successfull"})
            } else {
                res.send({ message: "wrong password"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})

app.get("/book",(req,res) => {
  res.send( { message: "Successfully Registered, Please login now." })
  //res.render();
  
});
app.post("/book",(req,res) => {
  const userbook = new bookSchema({
    frist_name: req.body.frist_name,
    last_name:req.body.last_name,
    Mobile_number : req.body. Mobile_number,
    Leaving_from  : req.body.Leaving_from,
    Type_of_Tickets : req.body. Type_of_Tickets,
    passport : req.body.passport
  });
  userbook.save(err => {
    if(err){
      res.send(err)
    }
    else{
      res.send({message: "Successfully book."})
    }
    
  })
  
});