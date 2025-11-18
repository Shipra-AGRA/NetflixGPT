import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../utils/moviesSlice"
import React from "react";
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/const";

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        getTopRatedMovies()
    }, [])
    const getTopRatedMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", API_OPTIONS)
            const json = await data.json()
            dispatch(addTopRatedMovies(json.results))
        } catch (err) {
            console.log(err)
        }
    }
}

export default useTopRatedMovies