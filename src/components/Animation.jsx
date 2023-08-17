import React from 'react'

const Animation = ({movie}) => {
  return (
    <>
    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={`${movie.title} Backdrop`}/>

    </>
  )
}

export default Animation