const Job= require('../models/job');

// add job form page 
module.exports.add=async function(req,res){
    try{
        return res.render('forms/addjob');
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

// create action it will add data in db 
module.exports.create=async function(req,res){
    try{
        req.flash('success','Job Created Successfully!');
        let job = await Job.create(req.body);
        res.redirect('/job/view');
    }
    catch(err){
        console.log(err);
    }
}

// to see list of all jobs 
module.exports.view=async function(req,res){
    try{
        let jobs= await Job.find({});
        return res.render('viewlists/viewjob',{
            jobs:jobs
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}
// this action will show the details of selected job 
module.exports.details=async function(req,res){
    try{
        let job= await Job.findById(req.params.id);
        return res.render('viewlists/jobdetails',{
            job:job
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

