//imports
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/db/connection.js');


const app = express();
dotenv.config({path : 'config.env'});
const PORT = process.env.PORT;
app.set('view engine', 'ejs');

//DB connection
connectDB();
//middlewares
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
//router import
app.use('/', require('./server/routes/router.js'));

app.listen(PORT, ()=>{console.log('Sever is running')});