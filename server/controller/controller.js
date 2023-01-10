const studentDB = require('../model/student_model.js');
var DB = require('../model/student_model.js');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message : 'content cannot be empty'});
        return;
    }

    const newStudent = new studentDB({
        rollNumber : req.body.rollNumber,
        Name : req.body.Name,
        DOB : req.body.DOB,
        score : req.body.score,
    });
    newStudent.save(newStudent).then(data => { res.redirect('/'); }).catch(err => { res.status(500).send({
        message : err.message
    }) });

};

exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        studentDB.findById(id).then(data => {
            if(!data){
                res.status(404).send({message : "User with ID: " + id + " not found"});
            }
            else{
                res.send(data);
            }
        }).catch(err => { res.status(500).send({ message : "Error retrieving user"})});
        }
    else
    {
        studentDB.find().then(user => { res.send(user); }).catch(err => { res.status(500).send({
            message : err.message,
        }) });
    }
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({message : 'content cannot be empty'});
    }
    const id = req.params.id;
    studentDB.findByIdAndUpdate(id, req.body, {useFindModify : false}).then(data => {
        if(!data){
            res.status(404).send({message : 'Cannot update user'});
        }
        else{
            res.send(data);
        }
    }).catch(err => {
        res.status(500).send({message : 'Error'});
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    studentDB.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({message : 'couldnot delete'});
        }
        else{
            res.send({message : 'deleted..'});
        }
    }).catch(err => {
        res.status(500).send({message : 'ERROR'});
    });
};