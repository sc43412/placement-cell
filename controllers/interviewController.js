const Interview=require('../models/interview');
const Company=require('../models/company');
const Student=require('../models/student');
const mailer = require('../mailers/mailerController');

module.exports.add=async function(req,res){
    try{
        let company= await Company.find({});
        let student= await Student.find({});
        return res.render('forms/addinterview',{
            company:company,
            student:student
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.create=async function(req,res){
    try{
        req.flash('success','Interview scheduled Successfully!');
        let interview =await Interview.create(req.body);
        let company= await Company.findById(req.body.company);
        interview = await interview.populate({ path: 'student',select: 'name email',});
        let item={
            id:interview.id,
            date:interview.date,
            result:interview.result,
            company:company.name
        }
        let student = await Student.findByIdAndUpdate(req.body.student,{ $push: { interviews: [item] } });
        mailer.interviewAdd(interview,company.name);
        res.redirect('/interview/view');
    }catch(err){
        console.log("Error**",err);
    }
}


module.exports.view=async function(req,res){
    try{
        let interviews= await Interview.find({}).sort('date').populate('company').populate('student');
        let company=await Company.find({});
        let student= await Student.find({});
        return res.render('viewlists/viewinterview',{
            interviews:interviews,
            company:company,
            student:student
        });
    }catch(err){
        req.flash('error','Some Error Occured');
    }
}

module.exports.update=async function(req,res){
    try{
        let interview= await Interview.findById(req.body.id);
        // Student.findByIdAndUpdate(req.body.student.id,{  interviews: [item]  });
        interview.result=req.body.result;
        interview.save();
        
        let student=await Student.findById(req.body.student);
        for(item of student.interviews){
            if(item.id=req.body.id){
                item.result=req.body.result;
            }
        }
        student=await Student.findByIdAndUpdate(req.body.student,{interviews:student.interviews})
        student.save();
        return res.redirect('back');
    }catch(err){
        console.log(err);
    }
}