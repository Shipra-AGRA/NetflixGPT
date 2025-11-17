import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import React from "react";
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/const";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    const getNowPlayingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
            const json = await data.json()
            dispatch(addNowPlayingMovies(json.results))
        } catch (err) {
            console.log(err)
        }
    }
}

export default useNowPlayingMovies