const mongoose=require('mongoose');
// schema to store jobs details 
const jobSchema=new mongoose.Schema({
    role:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    ctc:{
        type:String,
        required:true,
    },
    skills:{
        type:String,
        required:true,
    },
    yop:{
        type:String,
        required:true,
    },
    jd:{
        type:String,
        required:true,
    },
    exp:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    }
    
},{
    timestamps:true
});


const Job = mongoose.model('Job', jobSchema);
module.exports = Job;