import React from 'react'
import TrendingCard from './TrendingCard'
import Animation from './Animation'
import SciFiCard from './SciFiCard'
import PopularCard from './PopularCard'
import './Display.css'

function Display ({display, setDisplay, filteredMovies}){

  

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const { allMovies } = await getMovies();
  //       setAllMovies(allMovies);
  //     } catch (error) {
  //       // Handle error if necessary
  //     }
  //   }

  //   fetchData();
  // }, []);

  

  /*------------------ ADD TO MY LIST FUNCTION -------------------------*/
  function addToList(inputData){
    setDisplay([...display, inputData])}

  /*------------------FUNCTIONS TO FILTER BY TYPE-------------------------*/
  function trendingMovie (input){
    if (input.vote_count > 500){
      return <TrendingCard key={input.id} movie={input}/>
    }
  }
  function popularMovies (input){
    if (input.popularity > 1000){
      return <PopularCard key={input.id} movie={input} addToList ={addToList}/>
    }
  }
  function genreScienceFiction(input) {
    return input.map(movie => {
      if (movie.genre.includes('Science Fiction')) {
        return <SciFiCard key={movie.id} movie={movie} />;
      }
      return null; // Return null for non-matching movies
    });
  }
  function genreAnimation (input){
    return input.map(movie =>{
      if (movie.genre.includes('Animation')){
       return  <Animation key={movie.id} movie={movie}/>
      }
      return null;
    } )
  }

  return (
    <div className ={'movie-container'}>
    <div className = "trending-container">
         
        <h2 className={'title-spacing text-light'}> Trending </h2>
        <div className = "trending-card-container">
        {filteredMovies.map(movie => trendingMovie(movie))} 

        
        </div>
    </div>
    <div className = "trending-container">
         
        <h2  className ={'title-spacing text-light'}> Popular </h2>
        <div className = "trending-card-container">
        {filteredMovies.map(movie => popularMovies(movie) )} 
        </div>
    </div>
    <div className = "trending-container">
         
        <h2  className ={'title-spacing text-light'}> Animation </h2>
        <div className = "trending-card-container">
        {genreAnimation(filteredMovies)} 

        
        </div>
    </div>
    <div className = "trending-container"> 
        <h2  className ={'title-spacing text-light'}> Sci-Fi </h2>
        <div className = "trending-card-container">
        {genreScienceFiction(filteredMovies)} 
        </div>
    </div>
    </div>
    

  )
}

export default Display