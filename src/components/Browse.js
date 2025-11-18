import React, { useState } from "react";
import { useEffect } from "react"
import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    const showGptsearch=useSelector((store)=>store.gpt?.showGptSearch)
    return (
        <>
            <Header/>
            {showGptsearch ?
                <GptSearchPage/>
                : <><MainContainer /><SecondaryContainer /></>}
        </>
    )
}
export default Browse