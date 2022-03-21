const mongoose=require('mongoose');
const { Schema } = require("mongoose");

// schema to store students details 
const studentSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    batch:{
        type: Schema.Types.ObjectId,
        ref: "Batch"
    },
    email:{
        type:String,
        required:true,
    },
    dsa:{
        type:String,
        required:true,
    },
    web:{
        type:String,
        required:true,
    },
    react:{
        type:String,
        required:true,
    },
    interviews: [
        {
          type: Object
        },
      ]
    
},{
    timestamps:true
});


const Student = mongoose.model('Student', studentSchema);
module.exports = Student;