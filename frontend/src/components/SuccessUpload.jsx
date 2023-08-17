import CheckSave from "../assets/svg/CheckSvg";
import emptyPicture from "../assets/images/emptyPicture.jpg"
const  SuccesUpload=()=>{ 
    return ( 
        <> 
           <div className="absolute centerScreen shadow-2xl bg-white rounded-lg">
                    <div className="flex flex-col items-center">
                       <CheckSave/>
                        <h1 className="mt-4 text-gray text-xs"> Uploaded Successfully !</h1>
                        <div className=" w-[350px] h-[230px] mt-8 mx-10 ">
                        <img className='rounded-lg' src={emptyPicture} alt="YourImage"/>
                        </div>
                        <div> 
                            <input className="rounded-xl bg-gray"></input>
                        </div>
                    </div>    
                </div>
        
        </>
    )
}
export default SuccesUpload;