
import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import Backup from '../assests/images/pagenotfoundimage.png'
import useTitle from '../hooks/useTitle';

export const MovieDetail = () => {
  const param= useParams();
  const[data,setData] =useState({});
  const image = data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`:Backup;
  const url1=`https://api.themoviedb.org/3/movie/${param.id}?api_key=${process.env.REACT_APP_API_KEY}`
  useTitle(data.title);

useEffect(()=>
  {
      async function fetchDetails(params) {
      const response=await fetch(url1);
      const data_id=await response.json();
      setData(data_id);
      console.log("Dataaaaaaa:"+data_id);
    }
   fetchDetails();
  },[]);
 
  return (
    <main>
      <section className='flex flex-col justify-around gap-8 md:flex-row'>
      <div className='flex-none w-full md:w-1/3'>
       
        <img src={image} alt={data.title} />
      </div>
      <div className='flex flex-col w-full md:w-2/3 '>
        <div>
          <h1 className='text-3xl font-bold'>{data.title}</h1>
            <p className='my-4'>{data.overview}</p>
        </div>

        
<div class="inline-flex rounded-md shadow-sm my-6" role="group"> 

{
data.genres?( 
  <p >
  { data.genres.map((genre)=>
  (
    <span class="mx-0.5 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white" key={genre.id}>
      {genre.name}
    </span>
  
  ))}
  </p>
  ):""
} 

{/* { data.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
              { data.genres.map((genre) => (
                <span className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2" key={genre.id}>{genre.name}</span>
              )) }
            </p>
            ) : "" } */}
</div>

<div class="flex items-center my-4">
    <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{data.vote_average}</p>
    <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{data.vote_count} reviews</a>
</div>


        <div className='flex flex-col my-3 '>
        <p className="my-2">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{data.runtime} min.</span>
          </p>

          <p className="my-2">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{data.budget}</span>
          </p>

          <p className="my-2">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{data.revenue}</span>
          </p>

          <p className="my-2">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{data.release_date}</span>
          </p>

          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank">{data.imdb_id}</a>
          </p>

        </div>
        </div>
      </section>
      
    </main>
  )
}

export default MovieDetail
