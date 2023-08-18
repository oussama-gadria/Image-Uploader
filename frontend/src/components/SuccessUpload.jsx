import CheckSave from "../assets/svg/CheckSvg";
const SuccesUpload = () => {
    const image="http://localhost:5000/file/getFile";
    return (
        <>
            <div className="absolute centerScreen shadow-2xl bg-white rounded-xl">
                <div className="flex flex-col items-center">
                    <CheckSave />
                    <h1 className="mt-4 text-boldGray text-lg font-semibold"> Uploaded Successfully !</h1>
                    <div className=" mt-8 mx-10 ">
                        <img className='rounded-lg  w-[350px] h-[230px]' src={image} alt="YourImage" />
                    </div>
                    <div>
                      
                        <div className="flex mb-10 mt-4 rounded-md shadow-md  w-[350px]">
                            <input type="text" id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className=" py-1 px-4 block w-full bg-lightGray   border-boldGray shadow-md rounded-l-md text-xs focus:z-10  focus:border-gray focus:ring-blue dark:border-gray-700 dark:text-gray-400" /><div className="text-xs flex items-center mr-11">{image}</div> 
                            <button type="button" className="py-1 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-md border border-boldGray border-transparent font-normal bg-blue text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm" onClick={() => {navigator.clipboard.writeText(image)}}>
                                Copy Link
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SuccesUpload;