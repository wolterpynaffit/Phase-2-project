import React from 'react'
import BannerDetails from './BannerDetails'
import Display from './Display'



function Home ({display, setDisplay, filteredMovies}) {
  return (
    <>
        <BannerDetails/>
        <Display display={display} setDisplay={setDisplay} filteredMovies={filteredMovies}/>
  
        

    </>


  )
}

export default Home