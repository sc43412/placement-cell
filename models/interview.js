const mongoose=require('mongoose');
const { Schema } = require("mongoose");
// schema for intreviews
const interviewSchema=new mongoose.Schema({
    
    role:{
        type:String,
        required:true,
    },
    student:{
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    date:{
        type:Date,
        required:true,
    },
    result:{
        type:String,
        required:true
    }
},{
    timestamps:true
});


const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;