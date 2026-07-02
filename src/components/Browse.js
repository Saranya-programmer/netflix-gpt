import Header from "./Header";

// import {API_OPTIONS} from "../utils/constants";
// import {useEffect} from "react";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMovies } from "../utils/movieSlice";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
    //fetch data from tmdb api and update the store

    /*

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    */

    useNowPlayingMovies();
    usePopularMovies();
    return (
        <div>
            <Header />
            <MainConatiner/>
            <SecondaryContainer/>

            {/*

            - Movie Container
               - video background
               - video title
            -secondary container
               - movie lists*n
                 - cards*n
            */}
        </div>
    );
};

export default Browse;