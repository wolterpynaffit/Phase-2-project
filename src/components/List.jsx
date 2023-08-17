import React from 'react'
import { useEffect, useState } from 'react'
import MyList from './MyList'


function List () {

  const [listed, setListed] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/List')
    .then(response => response.json())
    .then(newListItem => setListed(newListItem))
  })

  
  return (
    <div>
      {listed.map(movie => <MyList key={movie.id}  movie={movie}/>)} 
    </div>
  )
}

export default List