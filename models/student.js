const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
 
  prenom: String,
  nom: String,
  annee: String,
  
  notes: [
    {
      module: String,
      note: Number
    }
  ]
 
  
});


module.exports = Student = mongoose.model('students', StudentSchema);