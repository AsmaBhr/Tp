
const express = require("express");//package express
const cors = require("cors");//pour secrisation
const bodyParser = require("body-parser");//package express
const mongoose = require('mongoose')
const mongoUrl = "mongodb://localhost:27017/Tpaaw";//url de mongo

const app = express();//fct expresss()
const PORT = 3000;//definir le port 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//internal requiers
 const students = require('./routes/students');
app.use('/students', students);


// Connect to the db
mongoose.connect(
    mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    async (err, db) => {
      if (err) throw err;
  
      await console.log("connected to mongodb");
    }
  );

//start the server
app.listen(PORT, () => {
    console.log('Server started on port: ' + PORT);
});




//Routes http get requests to the speisified path
//app.get("/api/profs/:name",function(req, res) {

  //  res.send("Hello professeur" + req.params.name);
//});

//app.get("/api/student/:name",function(req, res) {

  //  res.send("Hello student" + req.params.name);
//});



//app.listen(PORT,() => {
  //  console.log('Le serveur a demarré au port '+PORT);
//});
 
