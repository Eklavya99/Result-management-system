const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    rollNumber : {type : String, required : true},
    Name : {type : String, required : true},
    DOB : {type : String, required : true},
    score : {type : String, required : false},
    result : {type : String, required : false}
});

const studentDB = mongoose.model('student_Db', studentSchema);

module.exports = studentDB;