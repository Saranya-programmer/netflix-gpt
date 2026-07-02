import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
      if (!movies) return null;
    console.log(movies);
    return(
    <div className="px-6">
        <h1 className="text-3xl py-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {/* <MovieCard posterPath={movies[0].poster_path} /> */}
                {movies.map(movie=><MovieCard key={movies.id} posterPath={movie.poster_path}/>)}
                
            </div>
        </div>
    </div>
    );
};


export default MovieList;