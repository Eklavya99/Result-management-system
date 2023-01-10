const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');
const axios = require('axios');

//GETs
router.get('/', (req, res)=> {
    axios.get('http://localhost:5000/api/students').then(function(response){
        // console.log(response);
        res.render('index.ejs', {users : response.data});
    }).catch(err => { res.send(err); });
});

router.get('/add-user', (req, res)=> {
    res.render('add_user.ejs');
});

router.get('/update-user', (req, res) => {
    axios.get('http://localhost:5000/api/students', {params : {id : req.query.id}}).then(function(response){
        res.render('update_user.ejs', {user : response.data});
    }).catch(err => { res.send(err); });
    
});

//POSTs
router.post('/api/students', controller.create);
router.get('/api/students', controller.find);
router.put('/api/students/:id', controller.update);
router.delete('/api/students/:id', controller.delete);

module.exports = router;