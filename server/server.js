const cors = require('cors');
const dbconfig=require("./config/dbconfig.js");
const userRoutes=require('./routes/userRoutes.js')
require('dotenv').config();
const express=require('express');
const app=express();



const corsOptions = {
    origin: 'http://localhost:3000/register', // Replace with the actual origin of your React app
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));
  
app.use(express.json());
app.use('/api/user',userRoutes);

console.log("server is running");
const port=process.env.PORT || 5000 ;
app.listen(port,()=>{
    console.log(`node Server is running on ${port}`);
})