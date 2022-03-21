// import instance of express 
const express = require("express");
const router = express.Router();
const userController=require('../controllers/usersController')
const passport = require('passport');

// call function of task controller depending on requested url
router.get("/signIn", userController.signIn);
router.get("/signUp", userController.signUp);
router.post("/create",userController.create);

// use passport as a middleware to authenticate
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/users/signIn'},
), userController.createSession);

router.get("/profile/",userController.profile);
router.get('/signOut', userController.destroySession);

router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/users/signIn'}),userController.createSession);

// export router module
module.exports = router;