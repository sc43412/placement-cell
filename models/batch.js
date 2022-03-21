const mongoose=require('mongoose');
const { Schema } = require("mongoose");
// schema for batch it includes all the batches and students registred batch
const batchSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        unique:true
    },
    cordinator:{
        type:String,
        required:true,
    },
    students: [
        {
          type: Schema.Types.ObjectId,
          ref: "Student"
        },
      ]
    
},{
    timestamps:true
});


const Batch = mongoose.model('Batch', batchSchema);
module.exports = Batch;