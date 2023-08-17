const express=require('express'); 
const router=express.Router(); 
const upload =require("../Controllers/upload")
router.post("/upload",upload.uploadImage);
module.exports = router;