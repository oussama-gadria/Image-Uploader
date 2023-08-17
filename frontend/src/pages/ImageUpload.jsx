import axios from "axios";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import UploadImage from "../components/UploadImage";
import SuccesUpload from "../components/SuccessUpload";

function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [progressPercent, setProgressPercent] = useState('45%');
    const [isUploaded,setIsUploaded]=useState(false)

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        setUploading(true)
        setTimeout(() => {
            setTimeout(() => {
                setProgressPercent('80%');
                setTimeout(() => {
                    setProgressPercent('100%');
                    setTimeout(() => {
                        setUploading(false);
                        setIsUploaded(true)
                    }, 300)
                }, 1000)
            }, 1000)
        }, 1000)
    }

    const saveImage = async () => {
        const formData = new FormData();
        formData.append("image", selectedFile);
        await axios.post("http://localhost:5000/file/upload", formData);
    };
    return (
        <>
            {uploading &&
                <ProgressBar progressPercent={progressPercent} />
            }
            {(!uploading && !isUploaded) &&
                <UploadImage changeHandler={changeHandler} />
            }
            {(!uploading && isUploaded) && 
            <SuccesUpload/>
            }
        </>
    )
}
export default ImageUpload;