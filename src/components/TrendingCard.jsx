import React from 'react'
import { useState, useEffect } from 'react';

function TrendingCard({movie}){


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
    <img className= 'card'src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Backdrop`}/>

  <div className = 'card-overlay'> 
  <button className = 'play-button'>  <i className="fa-solid fa-play"></i> </button>

  <button onClick={handleToggle} className = 'add-button'> 
  {add ?
   <i className="fa-solid fa-check" style={{fontSize:'2rem', color: 'rgb(240, 212, 28)'}}></i> : <i className="fa-solid fa-circle-plus" style={{fontSize:'2rem'}}></i>
 
   }
  
  </button>

  <button onClick={handleLike} className = 'like-button'>
      {like ? <i className="fa-solid fa-thumbs-up" style={{fontSize:'2rem',  color: 'rgb(240, 212, 28)'}}></i> : <i class="fa-regular fa-thumbs-up" style={{fontSize: '2rem'}}></i> } </button>
</div>
</div>

    </>
  )
}

export default TrendingCard






