import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies);
    return(
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-12">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.PopularMovies}/>
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies}/>
            {/*
            Movie Lists-Popular
              moviecards*n
            Movie Lists-Trending
            Movie Lists-Now playing
            Movie Lists-horror
            */}
            </div>
     
            SecondaryContainer</div>
    )

};
export default SecondaryContainer;