import React from 'react'


function TrendingCard({movie}){
  return (
    <>
    <img className= 'card'src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Backdrop`}/>

    </>
  )
}

export default TrendingCard