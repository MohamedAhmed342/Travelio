
const express = require("express");
const app = express();
const port = 5000;
app.set("view engine", "ejs");
const userApi = require("./modules/userSchema");

// for auto refresh
// const path = require("path");
// const livereload = require("livereload");
// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, "public"));

// const connectLivereload = require("connect-livereload");
// app.use(connectLivereload());

// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });


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
// app.listen(port, () => {
//        console.log(`Example app listening at http://localhost:${port}`);
// });

//   app.get("/", (req, res) => {
//     console.log("welcome");
//   });




  app.post("/login", (req, res)=> {
    const useA = new userApi(req.body);
   
    useA.findOne({ email: email}, (err, user) => {
                if(useA){
            if(password === useA.password ) {
                res.send({message: "Login Successfull", useA: useA})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
})
app.get("/",(req,res) => {
 // res.render("/test.ejs");

 res.send({message: "User already registerd"})
}) ;

app.post("/", (req, res)=> {

  const useA = new userApi(req.body);
  useA.findOne({email: email}, (err, useA) => {
       if(useA){
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