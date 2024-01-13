const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        reqquired:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps: true
})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;