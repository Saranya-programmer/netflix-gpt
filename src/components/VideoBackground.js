
// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { useEffect} from "react";
import {useSelector} from "react-redux";
// import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {

    // const [trailerId,setTrailerId]=useState(null);
    

    
    const trailerVideo=useSelector((store)=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);


    /*

    const dispatch=useDispatch();
    //fetch trailer video && udating the store with trailer video data
    const getMovieVideos = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/1275779/videos?language=en-US', API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);

    */
    return (

        <div>
            <iframe
            //  width="560" 
            // height="315" 
            // src="https://www.youtube.com/embed/icDuEHSxE-w?si=3xi89VzG8-3T4Vnh"
            className="w-screen aspect-video"
             src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1"}
             title="YouTube video player" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    );
};

export default VideoBackground;