import axios from "axios";
import ProgressBar from "../components/ProgressBar";
import UploadImage from "../components/UploadImage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ImageUpload =()=>{
    const [selectedFile, setSelectedFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [progressPercent, setProgressPercent] = useState('45%');
    const navigate=useNavigate();
    const changeHandler=(e)=>{
        setSelectedFile(e.target.files[0]);   
    }
    useEffect(()=>{ 
        if(selectedFile){ 
            const formData = new FormData();
            formData.append("image",selectedFile);
            axios.post("http://localhost:5000/file/upload", formData);
            setUploading(true);
            setTimeout(() => {
                setTimeout(() => {
                    setProgressPercent('80%');
                    setTimeout(() => {
                        setProgressPercent('100%');
                        setTimeout(() => {
                            setUploading(false);
                            navigate("/successUpload")
                        }, 400)
                    }, 1000)
                }, 1000)
            }, 1000)
           }
    },[selectedFile])


    return (
        <>
            {uploading &&
                <ProgressBar progressPercent={progressPercent} />
            }
            {!uploading  &&
                <UploadImage  changeHandler={(e)=>changeHandler(e)} />
            }
        </>
    )
}
export default ImageUpload;