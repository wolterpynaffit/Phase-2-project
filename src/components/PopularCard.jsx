import React from 'react'
import './Display.css'
import { useState } from 'react'

function PopularCard ({movie}){
  const [add, setAdd] =  useState('')

  function handleToggle(){
    setAdd(!add)

    const OPTIONS = {
      method: "POST",
      headers:  {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(
        movie
      )
    };

      fetch(' http://localhost:3000/List', OPTIONS)
      .then (response => response.json())
      .then(data => data)

    }
 


  return (
    <>
    <div className= 'trending-card'>
    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={`${movie.title} Backdrop`} className={'card-image'}/>

    <div className = 'card-overlay'> 
      <button className = 'play-button'>  <i className="fa-solid fa-play"></i> </button>

      <button onClick={handleToggle} className = 'add-button'> 
      {add ?
      <i className="fa-solid fa-circle-plus" style={{fontSize:'2rem'}}></i> :
      <i className="fa-solid fa-check" style={{fontSize:'2rem'}}></i>
       }
      
      </button>

      <button className = 'like-button'><i className="fa-regular fa-thumbs-up"style={{fontSize:'2rem'}}></i> </button>
    </div>


    </div>

    </>
  )
}

export default PopularCard