import { API_OPTIONS } from "../utils/const"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getMovieVideos()
    }, [])
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        const trailer = json.results.find((video) => video.type === "Trailer")
        dispatch(addTrailerVideo(trailer))
    }
}
export default useMovieTrailer