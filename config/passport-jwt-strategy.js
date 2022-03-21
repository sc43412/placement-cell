// importing libraries 
const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const User=require('../models/users');

// jwt secrets 
let opts={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'Codeial'
}
// using jwt strategy 
passport.use(new jwtStrategy(opts,function(jwtPayload,done){
    // searching for user in user table in db
    User.findById(jwtPayload._id,function(err,user){
        // handling error 
        if(err){
            console.log("error in finding user in jwt",err);
        }

        // if user found returning user 
        if(user){
            return done(null,user);
        }else{
            // if user not found returning false 
            return done(null,false);
        }

    })
}))

module.exports=passport;