// import instance of express 
const express = require("express");
const router = express.Router();
const jobController=require('../controllers/jobController')

// call function of task controller depending on requested url
router.get("/add",jobController.add);
router.get("/view",jobController.view);
router.get("/details/:id",jobController.details);
router.post("/create",jobController.create);

module.exports = router;