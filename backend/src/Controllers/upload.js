const uploadImage=(req,res) => {
    const {image}=req.files;
    console.log(image) ; 
    if (!image) return res.sendStatus(400);
    if ((/^image/).test(image.mimeType))return res.sendStatus(400); 
    image.mv('../backend/src/upload/image.png'); 
    res.sendStatus(200);
}
const sendFile=(req,res)=>{ 
  return res.sendFile("C:/Users/21653/Documents/GitHub/Image-Uploader/backend/src/upload/image.png");
}
module.exports={uploadImage,sendFile}


