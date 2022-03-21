// importing libraries and controllers
const express=require('express');
const router=express.Router();
const homeController= require('../controllers/homeController');
const csvController= require('../controllers/csvController');

// this will to redirected to home controller acction
router.get('/',homeController.home);

// this urls will use other files for routs  
router.use('/users',require('./users'));
router.use('/company',require('./company'));
router.use('/batch',require('./batch'));
router.use('/interview',require('./interview'));
router.use('/student',require('./student'));
router.use('/job',require('./job'));

// this url is called to download data in scv format 
router.get('/download',csvController.allStudent);
module.exports = router;