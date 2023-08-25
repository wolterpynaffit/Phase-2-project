import React from 'react'
import BannerDetails from './BannerDetails'
import Display from './Display'



function Home ({display, setDisplay, filteredMovies}) {

  function randomMovieImage(){
    display.map(movie => {
     console.log(movie.id)
    }) 
   
  }

  randomMovieImage()

  return (
    <>

    
        <BannerDetails/>
        <Display display={display} setDisplay={setDisplay} filteredMovies={filteredMovies}/>

    </>


  )
}

export default Home