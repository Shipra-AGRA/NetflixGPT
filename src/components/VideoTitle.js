const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="text-lg py-6 w-1/4">{overview}</p>
            <div className="flex">
                <button className="bg-gray-400 text-white p-2 py-5 px-16 text-2lg flex items-center justify-center rounded-lg font-bold hover:bg-gray-400/80">▶ Play</button>
                <button className="bg-gray-400 text-white p-2 py-5 px-16 text-2lg flex items-center justify-center rounded-lg mx-3 font-bold hover:bg-gray-400/80">ℹ️ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle