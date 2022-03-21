const Company=require('../models/company');

// loading form to add company 
module.exports.add= function(req,res){
    return res.render('forms/addcompany');
}

// form submitted and and adding data to db 
module.exports.create= function(req,res){
    req.flash('success','Company Created Successfully!');
    Company.create(req.body);
    res.redirect('/company/view');
}


// retriving all companies from db and sending list to views 
module.exports.view=async function(req,res){
    try{
        let companies= await Company.find({});
        return res.render('viewlists/viewcompany',{
            companies:companies
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}