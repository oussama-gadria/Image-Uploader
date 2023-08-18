import { useRef } from "react";
import UploadSvg from "../assets/svg/UploadSvg";
import ChooseFileButton from "../components/Button";

const UploadImage=({changeHandler})=>{ 
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    }
    return ( 
        <> 
        <div className="absolute centerScreen shadow-2xl bg-white rounded-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="mt-12 text-boldGray font-bold text-xl">Upload your image</h1>
                        <h1 className="mt-4 text-gray text-xs"> File should be .Jpeg ,Png...</h1>
                    </div>
                    <div className="mt-8 mx-10">

                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center  w-[350px] h-[230px] border-[1px]   border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-lightGray hover:bg-gray-100 dark:border-lightBlue dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex  flex-col items-center justify-center pt-5 pb-6">
                                <UploadSvg />
                                <p className="text-xs text-gray  dark:text-gray-400 mt-10">Drag & Drop your image here</p>
                            </div>
                            <input id="dropzone-file" ref={inputRef} type="file" className="hidden" onChange={changeHandler} />
                        </label>
                    </div>
                    <div className="flex items-center flex-col pt-6">
                        <h1 className="text-gray text-xs">Or</h1>
                        <ChooseFileButton handleClick={handleClick} />
                    </div>
                </div>
        </>
    )
}
export default UploadImage;