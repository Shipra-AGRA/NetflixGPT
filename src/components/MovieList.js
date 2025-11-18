import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-12">
            <h1 className="text-3xl py-6 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        movies?.map((movie, index) =>
                            <MovieCard posterPath={movie?.poster_path} key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieList