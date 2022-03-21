const nodemailer=require('../config/nodemailer');

// user add function gets called when new user has signed up 
exports.userAdd=(user)=>{

    let htmlString=nodemailer.renderTemplate({user:user},'/userAdd.ejs');
    nodemailer.transporter.sendMail({
        from:'snipersourav060@gmail.com',
        to:user.email,
        subject:"Placement Cell- Account created Successfully!",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}
// this function gets called when student data is added 
// this will send remainder to the registered mail id 
exports.studentAdd=(user)=>{
    let htmlString=nodemailer.renderTemplate({user:user},'/studentAdd.ejs');
    nodemailer.transporter.sendMail({
        from:'snipersourav060@gmail.com',
        to:user.email,
        subject:"Placement Cell- Profile created Successfully!",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}

// this function gets called when we scheduled an  interview 
exports.interviewAdd=(interview,company)=>{
    let htmlString=nodemailer.renderTemplate({interview:interview,company:company},'/interviewAdd.ejs');
    nodemailer.transporter.sendMail({
        from:'snipersourav060@gmail.com',
        to:interview.student.email,
        subject:"Invitation for Online Interview with "+company+" for the position of "+interview.role,
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}

