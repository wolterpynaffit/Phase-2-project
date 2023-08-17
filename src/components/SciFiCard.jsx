import React from 'react'

const SciFiCard = ({movie}) => {
  return (
    <>
    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={`${movie.title} Backdrop`}/>

    </>
  )
}

export default SciFiCard