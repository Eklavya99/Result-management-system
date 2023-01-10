const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        const dbConnection = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser : true,
        });
        console.log('Connection to DB successfull!');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;