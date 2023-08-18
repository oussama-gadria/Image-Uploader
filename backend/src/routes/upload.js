const express=require('express'); 
const router=express.Router(); 
const upload =require("../Controllers/upload")
router.post("/upload",upload.uploadImage);
router.get("/getFile",upload.sendFile);
module.exports = router;