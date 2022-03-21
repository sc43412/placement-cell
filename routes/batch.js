// import instance of express 
const express = require("express");
const router = express.Router();
const batchController=require('../controllers/batchController')

// call function of task controller depending on requested url
router.get("/add",batchController.add);
router.post("/create",batchController.create);
router.get("/view",batchController.view);

// export router module
module.exports = router;