const uploadImage=(req,res) => {
    const {image}=req.files;  
    if (!image) return res.sendStatus(400);
    if ((/^image/).test(image.mimeType))return res.sendStatus(400); 
    image.mv('../backend/src/upload/'+image.name); 
    res.sendStatus(200);
}
module.exports={uploadImage}