import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import React from "react";
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/const";

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const popularMovies=useSelector((store)=>store.movies?.popularMovies)

    useEffect(() => {
        if(!popularMovies)
        getPopularMovies()
    }, [])
    
    const getPopularMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", API_OPTIONS)
            const json = await data.json()
            dispatch(addPopularMovies(json.results))
        } catch (err) {
            console.log(err)
        }
    }
}

export default usePopularMovies