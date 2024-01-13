require('dotenv').config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URL);
const connection= mongoose.connection;

connection.on('connected',()=>{
    console.log(`MongoDB connected on ${process.env.MONGO_URL}`);
});

connection.on('error',()=>{
    console.log("Error connecting to MongoDB");
})

module.exports=mongoose;