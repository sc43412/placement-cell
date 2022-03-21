const mongoose=require('mongoose');
// schema to create n store company details  
const companySchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    }
    
},{
    timestamps:true
});


const Company = mongoose.model('Company', companySchema);
module.exports = Company;