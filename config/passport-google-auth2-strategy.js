// const passport = require("passport");
// const googleStrategy=require('passport-google-oauth').OAuth2Strategy;

// const crypto=require('crypto');
// const User=require('../models/users');

// //tell passport to use new starategy
// passport.use(new googleStrategy({
//     // client secrets and client id 
//     clientID:'1071472878165-dvj60v3qrs1gqrj8cppp6foia0qmnbmg.apps.googleusercontent.com',
//     clientSecret:'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',
//     callbackURL:"https://ninja-placement-cell.herokuapp.com:8000/users/auth/google/callback"
//     },
//     function(accessToken,refreshToken,profile,done){
//         User.findOne({email:profile.emails[0].value}).exec(function(err,user){
//             if(err){console.log('error in google strategy passport',err);return}

//             console.log(profile);
//             if(user){

//                 // if user founthen set this as user
//                 return done(null,user);
//             }
//             else{
//                 // ifuser not found creating the user
//                 User.create({
//                     name:profile.displayName,
//                     email:profile.emails[0].value,
//                     passport:crypto.randomBytes(20).toString('hex')
//                 },function(err,user){
//                     if(err){console.log('error in Creating user',err);return}
//                     return done(null,user);
//                 });
//             }
//         })
//     }
// ));

// module.exports=passport;