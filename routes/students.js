const express = require("express");
const cors = require("cors");
const students = express.Router();
const Student = require("../models/student");

students.use(cors());

students.post("/register", (req, res) => {
    
    const studentData = {
      prenom: req.body.prenom,
      nom: req.body.nom,
      annee: req.body.annee,
    }
    Student.create(studentData)
    .then(student => {
      res.json(student);
    })
});
module.exports = students;