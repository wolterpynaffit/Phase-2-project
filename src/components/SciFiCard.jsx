import React from 'react'
import { useState, useEffect } from 'react';
import './Display.css'

const SciFiCard = ({movie}) => {
  const [like, setLike] = useState(false)
  useEffect(() => {
    const likeState = localStorage.getItem(`movie_${movie.id}`);
    if (likeState !== null) {
      setLike(likeState === 'true');
    }
  }, [movie.id]);


  const [add, setAdd] =  useState(false)

  useEffect(() => {
    const storedState = localStorage.getItem(`movie_${movie.id}`);
    if (storedState !== null) {
      setAdd(storedState === 'true');
    }
  }, [movie.id]);


  function handleToggle(){
    if (!add){
        const OPTIONS = {
          method: "POST",
          headers:  {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(movie)
        };

          fetch(' http://localhost:3000/List', OPTIONS)
        } else {
        const OPTIONS = {
          method: "DELETE"
        }
          fetch(`http://localhost:3000/List/${movie.id}`,OPTIONS)
          .catch(error => console.log('Error deleting movie: ', error))
    }
    localStorage.setItem(`movie_${movie.id}`, !add)
    setAdd(!add)
  }
  function handleLike(){
    setLike(!like)
  }
 
  return (
    <>
    
    <div className = 'trending-card'>

    <div className='card-wrapper'>
      <div className = 'card-image-container'>
    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt={`${movie.title} Backdrop`}/>
    </div>





        {/*------------------ BUTTONS AND OVERLAY EFFECT---------------------------*/}

                 {/* This is the pop-out overlay */}
                 <div className="card-overlay" >
            <div className = "card-image-overlay">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`}
            alt={`${movie.title} Backdrop`}
            className={`card-image  ${like ? 'liked' : ''}`}
          />
          </div>
        
          <div className ='card-buttons'>
            <button className="play-button">
              <i className="fa-solid fa-play"></i>
            </button>
            <button onClick={handleToggle} className="add-button">
              {add ? (
                <i
                  className="fa-solid fa-check"
                  style={{ fontSize: '2rem', color: 'rgb(240, 212, 28)' }}
                ></i>
              ) : (
                <i className="fa-solid fa-circle-plus" style={{ fontSize: '2rem' }}></i>
              )}
            </button>
            <button onClick={handleLike} className="like-button">
              {like ? (
                <i
                  className="fa-solid fa-thumbs-up"
                  style={{ fontSize: '2rem', color: 'rgb(240, 212, 28)' }}
                ></i>
              ) : (
                <i className="fa-regular fa-thumbs-up" style={{ fontSize: '2rem' }}></i>
              )}
            </button>
          </div>
        </div>
        {/*--------------- END BUTTONS AND OVERLAY EFFECT------------------------*/}
        </div>
        </div>
  

    </>
  )
}

export default SciFiCard