import {Routes,Route} from "react-router-dom";
import  {MovieList} from "../pages/MovieList";
import  {MovieDetail} from "../pages/MovieDetail";
import  {PageNotFound} from "../pages/";
import  {Search} from "../pages/Search";
import React from 'react'

export const Allroutes = () => {
  return (
    <div className="bg-blue-850">
    <Routes>
     
            <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
            <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
            <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search apiPath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />


    </Routes>
    </div>
  )
}

export default Allroutes

