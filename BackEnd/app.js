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
 res.send({message: "Use post register"})
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

app.get('/get/user/:id', (req, res) => {
  const id = req.params.id;

  if (!id) 
  return res.status(404).send({ err: "Missing Data Parameter" });

  getUser(id)
    .then(user => {
      return res.status(200).send(user);
    })
    .catch(err => {
      return res.status(404).send({ error: err.message });
    });
});

const getUser = async (id) => {
  const user_exists = await userApi.findOne({'_id': id});

  if (!user_exists) throw new Error("User Not Found"); 

  return user_exists;
};

app.get('/delete/user/:id', (req, res) => {
  const id = req.params.id;

  if (!id) 
  return res.status(404).send({ err: "Missing Data Parameter" });

  deleteUser(id)
    .then(user => {
      return res.status(200).send(user);
    })
    .catch(err => {
      return res.status(404).send({ error: err.message });
    });
});

const deleteUser = async (id) => {
  const user_exists = await userApi.findOne({'_id': id});

  if (!user_exists) throw new Error("User Not Found"); 

  return await userApi.deleteOne({'_id': id });
}

app.get('/update/user/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  if (!id || !name) 
  return res.status(404).send({ err: "Missing Data Parameter" });

  updateUser(id, name)
    .then(user => {
      return res.status(200).send(user);
    })
    .catch(err => {
      return res.status(404).send({ error: err.message });
    });
});

const updateUser = async (id, name) => {
  const user_exists = await userApi.find({'_id': id});

  if (!user_exists) throw new Error("User Not Found"); 

  await userApi.updateOne({ '_id': id }, { 'name': name });
  
  user_exists.name = name;
  user_exists.password = undefined;
  return user_exists;
}

app.get("/",(req,res) => {
  res.send( { message: "Wellcome" })
  //res.render();
  
})

//book

app.get("/login",(req,res) => {
  res.send( { message: "please login" })
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
  res.send( { message: "Use post req" })
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

app.get('/get/book/:id', (req, res) => {
  const id = req.params.id;

  if (!id) 
  return res.status(404).send({ err: "Missing Data Parameter" });

  getBook(id)
    .then(book => {
      return res.status(200).send(book);
    })
    .catch(err => {
      return res.status(404).send({ error: err.message });
    });
});

const getBook = async (id) => {
  const book_exists = await bookSchema.findOne({'_id': id});

  if (!book_exists) throw new Error("User Not Found"); 

  return book_exists;
};

app.get('/delete/book/:id', (req, res) => {
  const id = req.params.id;

  if (!id) 
  return res.status(404).send({ err: "Missing Data Parameter" });

  deleteBook(id)
    .then(book => {
      return res.status(200).send(book);
    })
    .catch(err => {
      return res.status(404).send({ error: err.message });
    });
});

const deleteBook = async (id) => {
  const book_exists = await bookSchema.findOne({'_id': id});

  if (!book_exists) throw new Error("User Not Found"); 

  return await bookSchema.deleteOne({'_id': id });
}

