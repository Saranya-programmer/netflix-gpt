


const VideoTitle=({title,overview})=>{
    return(
        <div className="pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-gray-500 py-4 px-12 bg-white text-black text-xl hover:bg-opacity-80 rounded-lg">▶Play</button>
                <button className="bg-gray-500 mx-2 py-4 px-12 text-white text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;