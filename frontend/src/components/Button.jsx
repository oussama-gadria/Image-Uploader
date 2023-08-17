const ChooseFileButton = ({handleClick}) => {
    return (
        <>
            <button type="file"  className="bg-blue hover:bg-blue-700 text-white text-[15px] font-normal py-1 px-3 mt-4 mb-12 rounded-lg" onClick={handleClick} >
                choose a file
            </button>
        </>
    )
}
export default ChooseFileButton;