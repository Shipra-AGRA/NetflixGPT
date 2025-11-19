import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const { movieNames, MovieResult } = useSelector((store) => store.gpt)
    if (!movieNames) return null;
    console.log("movieNames, MovieResult", movieNames, MovieResult)
    return (
        <div className="p-4 m-4 bg-black/70 text-white">
            <div>
                {movieNames.map((name, index) => <MovieList title={name} movies={MovieResult[index]} key={index}/>)}
            </div>
        </div>
    )
}
export default GptMovieSuggestions