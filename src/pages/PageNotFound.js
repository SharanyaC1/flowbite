import { Link } from "react-router-dom";
import PageNotFoundImage from '../assests/images/pagenotfoundimage.png'
import { Button } from "../pages/Button";

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2 '>
        <div className='flex flex-col items-center my-6'>
        
        <img className="size-1/2" src= {PageNotFoundImage} alt="PAGE NOT FOUND" />
        </div >
        <div className='flex flex-col items-center'>
          <p className='text-3xl text-gray-700 font-bold my-8 dark:text-white'>OOPS!! PAGE NOT FOUND</p>
        </div>
        <div className='flex flex-col items-center '>
          <Link to="/">
          <Button>Back To Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}




// import React from 'react'../assests/images/pagenotfoundimage.png'
// import PageNotFoundImage  from '
// import { Link } from 'react-router-dom'
// import Button from './Button'



// export default PageNotFound;
