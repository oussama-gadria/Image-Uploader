const ProgressBar = ({ progressPercent }) => {
    return (
        <>
            <div className="centerScreen">
                <div className="flex ml-5 rounded-lg shadow-xl flex-col items-center  w-[400px] bg-white">
                    <div>
                        <h1 className="mt-2 text-boldGray font-bold text-[19px]">Uploading...</h1>
                    </div>
                    <div className=" h-1 px-4 my-4 w-full bg-neutral-200 dark:bg-neutral-600">
                        <div className="h-1 bg-blue" style={{ width: `${progressPercent}` }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProgressBar;