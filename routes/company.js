// import instance of express 
const express = require("express");
const router = express.Router();
const companyController=require('../controllers/companyController')

// call function of task controller depending on requested url
router.get("/add",companyController.add);
router.get("/view",companyController.view);
router.post("/create",companyController.create);
// export router module
module.exports = router;