import { IMG_CDN } from "../utils/const"

const MovieCard=({posterPath})=>{
    if(!posterPath) return null
return(
    <div className="w-30 md:w-48 p-2 md:pr-4">
        <img src={IMG_CDN+posterPath} alt="Movie card"/>
    </div>
)
}
export default MovieCard