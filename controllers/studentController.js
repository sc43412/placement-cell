const Student= require('../models/student');
const Batch=require('../models/batch');
const mailer = require('../mailers/mailerController');
module.exports.add=async function(req,res){
    try{
        let batches= await Batch.find({});
        return res.render('forms/addstudent',{
            batches:batches
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.create=async function(req,res){
    try{
        req.flash('success','Student Created Successfully!');
        let student =await Student.create(req.body);
        user = await student.populate('batch', 'name cordinator');
        mailer.studentAdd(user);
        let batch = await Batch.findByIdAndUpdate(req.body.batch,{ $push: { students: [student.id] } });
        res.redirect('/student/view');
    }
    catch(err){
        console.log(err);
    }
}

module.exports.view=async function(req,res){
    try{
        let students= await Student.find({}).populate('batch');
        let batch=await Batch.find({});
        return res.render('viewlists/viewstudent',{
            students:students,
            batch:batch
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.update=async function(req,res){
    let student= await Student.findById(req.body.id);
    student.status=req.body.status;
    student.save();
    return res.redirect('back');

}